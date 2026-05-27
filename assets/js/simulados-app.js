/* simulados-app.js — lacunas editáveis inline no bloco de código */
window.CATEGORIAS = window.CATEGORIAS || [];
window.registrarCategoria = function(cat) { window.CATEGORIAS.push(cat); };

let catAtual = null;

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ---- MENU CATEGORIAS ---- */
function renderMenuCats() {
  const nav = document.getElementById('nav-categorias');
  if (!nav) return;
  nav.innerHTML = '';
  window.CATEGORIAS.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat.id === catAtual ? ' ativo' : '');
    btn.innerHTML = `<span class="cat-icone">${cat.icone}</span>${cat.titulo}`;
    btn.onclick = () => { catAtual = cat.id; render(); };
    nav.appendChild(btn);
  });
}

/* ---- INPUT INLINE ---- */
function inputLacuna(placeholder, largura) {
  const w = largura || 180;
  return `<input type="text" class="lacuna-input" placeholder="${placeholder}" style="width:${w}px" autocomplete="off" spellcheck="false">`;
}

/* ---- CÓDIGO: NÍVEL 1 — inputs inline na linha ---- */
function codigoN1(q) {
  const lacMap = {};
  q.n1.forEach((lac, idx) => { lacMap[lac.linha] = { lac, idx }; });
  return q.base.map((linha, i) => {
    const entry = lacMap[i];
    if (!entry) return `<span class="cod-linha">${esc(linha)}</span>`;
    const { lac } = entry;
    if (lac.antes !== '' || lac.depois !== '') {
      const largura = Math.max(140, lac.resposta.length * 9 + 40);
      return `<span class="cod-linha lacuna-linha">${esc(lac.antes)}${inputLacuna(lac.dica, largura)}${esc(lac.depois)}</span>`;
    }
    // lacuna de linha inteira dentro de bloco
    const largura = Math.max(260, lac.resposta.length * 9 + 40);
    return `<span class="cod-linha lacuna-linha">${inputLacuna(lac.dica, largura)}</span>`;
  }).join('\n');
}

/* ---- CÓDIGO: NÍVEL 2 — input de linha inteira ---- */
function codigoN2(q) {
  const lacMap = {};
  q.n2.forEach((lac, idx) => { lacMap[lac.linha] = { lac, idx }; });
  return q.base.map((linha, i) => {
    const entry = lacMap[i];
    if (!entry) return `<span class="cod-linha">${esc(linha)}</span>`;
    const { lac } = entry;
    const largura = Math.max(300, lac.resposta.length * 9 + 40);
    return `<span class="cod-linha lacuna-linha-n2">${inputLacuna(lac.dica, largura)}</span>`;
  }).join('\n');
}

/* ---- CÓDIGO: NÍVEL 3 — inputs por linha do bloco ---- */
function codigoN3(q) {
  const lac = q.n3;
  const inicio = lac.linhas[0];
  const fim    = lac.linhas[lac.linhas.length - 1];
  const antes  = q.base.slice(0, inicio).map(l => `<span class="cod-linha">${esc(l)}</span>`).join('\n');
  const depois = q.base.slice(fim + 1).map(l => `<span class="cod-linha">${esc(l)}</span>`).join('\n');

  // Uma linha de input por linha do bloco removido
  const linhasBloco = lac.resposta.map((resp, idx) => {
    const largura = Math.max(280, resp.length * 9 + 40);
    return `<span class="cod-linha lacuna-linha-n3">${inputLacuna(`linha ${idx+1}...`, largura)}</span>`;
  }).join('\n');

  return [antes, linhasBloco, depois].filter(Boolean).join('\n');
}

/* ---- GABARITO: NÍVEL 1 ---- */
function gabN1(q) {
  return q.n1.map((lac, i) => `
    <div class="gab-item">
      <span class="gab-num">Lacuna ${i+1}</span>
      <code>${esc(lac.antes + lac.resposta + lac.depois)}</code>
      <span class="gab-dica">${esc(lac.dica)}</span>
    </div>`).join('');
}

/* ---- GABARITO: NÍVEL 2 ---- */
function gabN2(q) {
  return q.n2.map((lac, i) => `
    <div class="gab-item">
      <span class="gab-num">Linha ${i+1}</span>
      <code>${esc(lac.resposta)}</code>
      <span class="gab-dica">${esc(lac.dica)}</span>
    </div>`).join('');
}

/* ---- GABARITO: NÍVEL 3 ---- */
function gabN3(q) {
  const linhas = q.n3.resposta.map(l => `<div><code>${esc(l)}</code></div>`).join('');
  return `<div class="gab-item">
    <span class="gab-num">Bloco completo</span>
    <div class="gab-bloco">${linhas}</div>
    <span class="gab-dica">${esc(q.n3.dica)}</span>
  </div>`;
}

/* ---- TOGGLE GABARITO ---- */
window.toggleGab = function(btn) {
  const gab  = btn.nextElementSibling;
  const open = gab.style.display !== 'none';
  gab.style.display = open ? 'none' : 'block';
  btn.textContent = open ? '▶ Ver gabarito' : '▼ Ocultar gabarito';
  btn.classList.toggle('aberto', !open);
};

/* ---- MONTA CARD DE QUESTÃO ---- */
function montarCard(q, nivel, numGlobal) {
  const NIVEL_CONFIG = {
    1: { label: 'Nível 1', sublabel: 'Complete a condição', cor: '#1a56a0',
         codigo: codigoN1, gab: gabN1,
         instrucao: 'Clique nas lacunas em amarelo dentro do código e escreva a condição ou valor.' },
    2: { label: 'Nível 2', sublabel: 'Complete a linha',    cor: '#b91c1c',
         codigo: codigoN2, gab: gabN2,
         instrucao: 'Clique nas lacunas em vermelho e escreva a linha completa.' },
    3: { label: 'Nível 3', sublabel: 'Escreva o bloco',     cor: '#374151',
         codigo: codigoN3, gab: gabN3,
         instrucao: 'Escreva cada linha do bloco removido nos campos dentro do código.' }
  };
  const cfg = NIVEL_CONFIG[nivel];
  const card = document.createElement('div');
  card.className = 'questao-card';
  card.innerHTML = `
    <div class="q-header">
      <span class="q-num">Questão ${numGlobal}</span>
      <span class="q-titulo">${esc(q.titulo)}</span>
      <span class="nivel-badge" style="background:${cfg.cor}">${cfg.label} — ${cfg.sublabel}</span>
    </div>
    <p class="q-enunciado">${esc(q.enunciado)}</p>
    <p class="q-instrucao">${esc(cfg.instrucao)}</p>
    <pre class="bloco-codigo">${cfg.codigo(q)}</pre>
    <div class="gab-wrapper">
      <button class="btn-gab" onclick="toggleGab(this)">▶ Ver gabarito</button>
      <div class="gabarito" style="display:none">${cfg.gab(q)}</div>
    </div>`;
  return card;
}

/* ---- RENDERIZA QUESTÕES DA CATEGORIA ---- */
function renderQuestoes() {
  const cat = window.CATEGORIAS.find(c => c.id === catAtual);
  const container = document.getElementById('questoes');
  if (!cat || !container) return;
  container.innerHTML = '';

  const el = document.getElementById('sim-cat-nome');
  if (el) el.textContent = cat.titulo;

  const NIVEL_LABELS = {
    1: 'Nível 1 — Complete a condição',
    2: 'Nível 2 — Complete a linha',
    3: 'Nível 3 — Escreva o bloco'
  };
  const NIVEL_CORES = { 1: '#1a56a0', 2: '#b91c1c', 3: '#374151' };

  let numGlobal = 1;
  [1, 2, 3].forEach(nivel => {
    const sep = document.createElement('div');
    sep.className = 'nivel-separador';
    sep.innerHTML = `<span class="nivel-sep-label" style="border-color:${NIVEL_CORES[nivel]};color:${NIVEL_CORES[nivel]}">${NIVEL_LABELS[nivel]}</span>`;
    container.appendChild(sep);

    cat.questoes.forEach(q => {
      container.appendChild(montarCard(q, nivel, numGlobal));
      numGlobal++;
    });
  });
}

/* ---- RENDER PRINCIPAL ---- */
function render() {
  if (!catAtual && window.CATEGORIAS.length) catAtual = window.CATEGORIAS[0].id;
  renderMenuCats();
  renderQuestoes();
}

/* nav.js — menu, rodape e controle de fonte */

/* ========= ROOT PATH ========= */
function getRoot() {
  // Funciona tanto em file:// quanto em servidor
  // Conta quantos niveis de pasta estamos abaixo do root do site
  const scripts = document.querySelectorAll('script[src]');
  for (const s of scripts) {
    const src = s.getAttribute('src');
    // assets/js/nav.js aparece em todos os arquivos
    if (src && src.includes('assets/js/nav.js')) {
      // Remove o "assets/js/nav.js" para obter o root relativo
      return src.replace('assets/js/nav.js', '');
    }
  }
  return './';
}

/* ========= CONTROLE DE FONTE ========= */
const FS_STEPS = [12, 13, 14, 15, 16, 18, 20, 22];
const FS_DEFAULT_IDX = 2; // 14px
let fsIdx = FS_DEFAULT_IDX;

function aplicarFonte(idx) {
  fsIdx = Math.max(0, Math.min(FS_STEPS.length - 1, idx));
  const px = FS_STEPS[fsIdx];
  document.body.style.fontSize = px + 'px';
  localStorage.setItem('fsIdx', fsIdx);
  const el = document.getElementById('font-nivel');
  if (el) el.textContent = px + 'px';
}

window.fontMenor = function() { aplicarFonte(fsIdx - 1); };
window.fontMaior = function() { aplicarFonte(fsIdx + 1); };
window.fontReset = function() { aplicarFonte(FS_DEFAULT_IDX); };

/* ========= NAV ========= */
function renderNav() {
  const root = getRoot();
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  topbar.innerHTML = `
  <div class="topbar-inner">
    <a class="site-logo" href="${root}index.html">Prof. <span>Everton Simoes da Motta</span></a>
    <nav id="main-nav">
      <div class="nav-item">
        <a class="nav-link" href="${root}index.html">Inicio</a>
      </div>
      <div class="nav-item">
        <button class="nav-link" onclick="void(0)">
          <span>Disciplinas</span>
          <span class="seta">&#9662;</span>
        </button>
        <div class="dropdown">
          <div class="dropdown-section">
            <div class="dropdown-label">Algoritmos</div>
            <a href="${root}disciplinas/algoritmos/materiais/index.html">Materiais de Aula</a>
            <a href="${root}disciplinas/algoritmos/simulados/index.html">Simulados</a>
          </div>
          <div class="dropdown-section">
            <div class="dropdown-label">Processamento de Imagens</div>
            <a href="${root}disciplinas/processamento-imagens/materiais/index.html">Materiais de Aula</a>
            <a href="${root}disciplinas/processamento-imagens/simulados/index.html">Simulados</a>
          </div>
          <div class="dropdown-section">
            <div class="dropdown-label">Realidade Virtual e Aumentada</div>
            <a href="${root}disciplinas/realidade-virtual/materiais/index.html">Materiais de Aula</a>
            <a href="${root}disciplinas/realidade-virtual/simulados/index.html">Simulados</a>
          </div>
          <div class="dropdown-section">
            <div class="dropdown-label">Programacao</div>
            <a href="${root}disciplinas/programacao/materiais/index.html">Materiais de Aula</a>
            <a href="${root}disciplinas/programacao/simulados/index.html">Simulados</a>
          </div>
        </div>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="${root}curriculo/index.html">Curriculo</a>
      </div>
    </nav>
    <div style="display:flex;align-items:center;gap:0.5rem">
      <div class="font-controls">
        <button class="font-btn menor" onclick="fontMenor()">A-</button>
        <span class="font-nivel" id="font-nivel">14px</span>
        <button class="font-btn maior" onclick="fontMaior()">A+</button>
        <button class="font-btn reset" onclick="fontReset()">&#8635;</button>
      </div>
      <div class="lang-toggle">
        <button class="lang-btn ativo" data-lang="pt" onclick="setLang('pt')">PT</button>
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  const f = document.getElementById('site-footer');
  if (!f) return;
  f.innerHTML = '<p>Prof. Everton Simoes da Motta &mdash; UNIVEM &mdash; Marilia, SP</p>';
}

document.addEventListener('DOMContentLoaded', function() {
  renderNav();
  renderFooter();
  var savedFs = localStorage.getItem('fsIdx');
  aplicarFonte(savedFs !== null ? parseInt(savedFs) : FS_DEFAULT_IDX);
  var savedLang = localStorage.getItem('lang') || 'pt';
  if (typeof setLang === 'function') setLang(savedLang);
});

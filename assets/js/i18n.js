/* i18n.js — traduções PT-BR / EN */
const I18N = {
  'pt': {
    nav_home:        'Início',
    nav_disciplinas: 'Disciplinas',
    nav_curriculo:   'Currículo',
    nav_pesquisa:    'Pesquisa',
    nav_contato:     'Contato',
    nav_materiais:   'Materiais de Aula',
    nav_simulados:   'Simulados',
    disc_algoritmos: 'Algoritmos',
    disc_pi:         'Processamento de Imagens',
    disc_vr:         'Realidade Virtual e Aumentada',
    disc_prog:       'Programação',
    home_cargo:      'Professor e Coordenador — Ciência da Computação',
    home_inst:       'Centro Universitário Eurípides de Marília — UNIVEM',
    home_pesquisa_titulo: 'Áreas de Pesquisa',
    home_pesquisa_1: 'Informática na Educação',
    home_pesquisa_2: 'Telepresença e Holografia (TeleProf)',
    home_pesquisa_3: 'Realidade Aumentada e Virtual',
    home_pesquisa_4: 'Desenvolvimento de Software',
    home_dout:       'Doutorando em Ciência da Computação — UFABC',
    mat_titulo:      'Materiais de Aula',
    mat_vazio:       'Os materiais desta disciplina serão disponibilizados em breve.',
    sim_titulo:      'Simulados',
    sim_desc:        'Exercícios de lacunas em Portugol organizados por categoria e nível.',
    nivel1_sub:      'Complete a condição',
    nivel2_sub:      'Complete a linha',
    nivel3_sub:      'Escreva o bloco',
    btn_gabarito:    '▶ Ver gabarito',
    btn_ocultar:     '▼ Ocultar gabarito',
    instrucao_n1:    'Escreva a condição ou valor que preenche cada lacuna destacada.',
    instrucao_n2:    'Escreva a linha completa que preenche cada espaço em branco.',
    instrucao_n3:    'Escreva todas as linhas do bloco removido.',
    curriculo_titulo:'Currículo',
    curriculo_desc:  'Dados curriculares importados da Plataforma Lattes (em breve).',
    footer_txt:      'Prof. Everton Simões da Motta — UNIVEM — Marília, SP',
    coming_soon:     'Em desenvolvimento',
  },
  'en': {
    nav_home:        'Home',
    nav_disciplinas: 'Courses',
    nav_curriculo:   'CV',
    nav_pesquisa:    'Research',
    nav_contato:     'Contact',
    nav_materiais:   'Course Materials',
    nav_simulados:   'Practice Tests',
    disc_algoritmos: 'Algorithms',
    disc_pi:         'Image Processing',
    disc_vr:         'Virtual & Augmented Reality',
    disc_prog:       'Programming',
    home_cargo:      'Professor & Coordinator — Computer Science',
    home_inst:       'Eurípides University Center of Marília — UNIVEM',
    home_pesquisa_titulo: 'Research Areas',
    home_pesquisa_1: 'Informatics in Education',
    home_pesquisa_2: 'Telepresence and Holography (TeleProf)',
    home_pesquisa_3: 'Augmented and Virtual Reality',
    home_pesquisa_4: 'Software Development',
    home_dout:       'PhD Candidate in Computer Science — UFABC',
    mat_titulo:      'Course Materials',
    mat_vazio:       'Materials for this course will be available soon.',
    sim_titulo:      'Practice Tests',
    sim_desc:        'Fill-in-the-blank exercises in Portugol organized by category and level.',
    nivel1_sub:      'Complete the condition',
    nivel2_sub:      'Complete the line',
    nivel3_sub:      'Write the block',
    btn_gabarito:    '▶ Show answer',
    btn_ocultar:     '▼ Hide answer',
    instrucao_n1:    'Write the condition or value that fills each highlighted blank.',
    instrucao_n2:    'Write the complete line that fills each blank.',
    instrucao_n3:    'Write all lines of the removed block.',
    curriculo_titulo:'Curriculum Vitae',
    curriculo_desc:  'Curriculum data imported from Lattes Platform (coming soon).',
    footer_txt:      'Prof. Everton Simões da Motta — UNIVEM — Marília, SP, Brazil',
    coming_soon:     'Coming soon',
  }
};

let LANG = 'pt';

function setLang(l) {
  LANG = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('ativo', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (I18N[LANG][k]) el.textContent = I18N[LANG][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (I18N[LANG][k]) el.placeholder = I18N[LANG][k];
  });
  localStorage.setItem('lang', l);
}

function t(k) { return I18N[LANG][k] || k; }

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'pt';
  setLang(saved);
});

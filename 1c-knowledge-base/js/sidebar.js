function buildSidebar() {
    const aside = document.getElementById('sidebar');
    let html = '';

    NAV_CONFIG.forEach(group => {
        html += `<div class="nav-section">${group.section}</div>`;
        group.items.forEach(item => {
            const iconPath = ICONS[item.icon] || '';
            const isStroke = ['code', 'search', 'event', 'target'].includes(item.icon);
            html += `
        <a class="nav-link" data-page="${item.id}">
          <span class="num">${item.num}</span>
          <svg class="ico-svg" viewBox="0 0 24 24"
               fill="${isStroke ? 'none' : 'currentColor'}"
               ${isStroke ? 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' : ''}>
            ${iconPath}
          </svg>
          ${item.title}
        </a>`;
        });
    });

    // Блок автора
    html += `
    <div class="author-block">
      <div class="author-title">Об авторе</div>
      <div class="author-row">
        <div class="ico">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
        </div>
        <div class="txt">
          <span class="lbl">GitHub</span>
          <a href="https://github.com/OBLADAET-ru" target="_blank" rel="noopener">OBLADAET-ru</a>
        </div>
      </div>
      <div class="author-row">
        <div class="ico">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6z"/></svg>
        </div>
        <div class="txt">
          <span class="lbl">Создатель</span>
          Платонов Виктор А.
        </div>
      </div>
    </div>`;

    aside.innerHTML = html;

    // Обработчики
    aside.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navigate(link.dataset.page);
        });
    });
}
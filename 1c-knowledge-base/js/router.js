const pageCache = {};

async function navigate(pageId, pushState = true) {
    if (!pageId) pageId = 'home';

    const content = document.getElementById('content');

    // Подсветка активного пункта
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === pageId);
    });

    // Закрытие сайдбара на мобилке
    if (window.innerWidth <= 900) {
        document.getElementById('sidebar').classList.remove('open');
    }

    try {
        let html;
        if (pageCache[pageId]) {
            html = pageCache[pageId];
        } else {
            const response = await fetch(`pages/${pageId}.html`);
            if (!response.ok) throw new Error(`Страница ${pageId} не найдена`);
            html = await response.text();
            pageCache[pageId] = html;
        }
        content.innerHTML = html;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Навешиваем обработчики копирования на новые pre-блоки
        attachCopyButtons();

        if (pushState) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }
    } catch (err) {
        content.innerHTML = `
      <div class="callout danger">
        <strong>Ошибка:</strong> ${err.message}
      </div>`;
    }
}

// Обработка кнопок "назад/вперёд" браузера
window.addEventListener('popstate', e => {
    const page = e.state?.page || location.hash.substring(1) || 'home';
    navigate(page, false);
});
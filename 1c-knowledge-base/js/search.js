let SEARCH_INDEX = [];

async function loadSearchIndex() {
    try {
        const res = await fetch('data/search-index.json');
        SEARCH_INDEX = await res.json();
    } catch (e) {
        console.warn('Не удалось загрузить поисковый индекс', e);
    }
}

function initSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) {
            results.classList.remove('active');
            return;
        }

        const matches = SEARCH_INDEX.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q)
        );

        if (matches.length === 0) {
            results.innerHTML = '<div class="search-result-item"><div class="desc">Ничего не найдено</div></div>';
        } else {
            results.innerHTML = matches.map(m => `
        <div class="search-result-item" data-page="${m.page}">
          <div class="title">${m.title}</div>
          <div class="desc">${m.desc}</div>
        </div>
      `).join('');

            results.querySelectorAll('.search-result-item[data-page]').forEach(el => {
                el.addEventListener('click', () => {
                    navigate(el.dataset.page);
                    results.classList.remove('active');
                    input.value = '';
                });
            });
        }
        results.classList.add('active');
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.search-box')) {
            results.classList.remove('active');
        }
    });
}
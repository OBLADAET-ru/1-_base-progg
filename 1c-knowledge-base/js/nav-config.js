const NAV_CONFIG = [
    {
        section: 'Введение',
        items: [
            { id: 'home', num: '§0', title: 'Главная', icon: 'home' },
            { id: 'basics', num: '§1', title: 'Основы платформы', icon: 'book' }
        ]
    },
    {
        section: 'Часть I. Язык',
        items: [
            { id: 'syntax', num: '§2', title: 'Синтаксис', icon: 'code' },
            { id: 'types', num: '§3', title: 'Типы данных', icon: 'grid' },
            { id: 'collections', num: '§4', title: 'Коллекции', icon: 'cube' },
            { id: 'functions', num: '§5', title: 'Процедуры и функции', icon: 'func' }
        ]
    },
    {
        section: 'Часть II. Данные',
        items: [
            { id: 'queries', num: '§6', title: 'Язык запросов', icon: 'search' },
            { id: 'sql', num: '§7', title: 'SQL и СУБД', icon: 'db' },
            { id: 'transactions', num: '§8', title: 'Транзакции', icon: 'lock' }
        ]
    },
    {
        section: 'Часть III. Интерфейс',
        items: [
            { id: 'forms', num: '§9', title: 'Управляемые формы', icon: 'form' },
            { id: 'formevents', num: '§10', title: 'События форм', icon: 'event' },
            { id: 'reports', num: '§11', title: 'Отчёты и СКД', icon: 'report' }
        ]
    },
    {
        section: 'Часть IV. Архитектура',
        items: [
            { id: 'extensions', num: '§12', title: 'Расширения', icon: 'puzzle' },
            { id: 'patterns', num: '§13', title: 'Паттерны', icon: 'target' },
            { id: 'optimization', num: '§14', title: 'Оптимизация', icon: 'bolt' }
        ]
    },
    {
        section: 'Практикум',
        items: [
            { id: 'snippets', num: '§15', title: 'Сниппеты', icon: 'doc' },
            { id: 'glossary', num: '§16', title: 'Глоссарий', icon: 'book2' }
        ]
    }
];

// SVG-иконки (можно вынести отдельно, если много)
const ICONS = {
    home: '<path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>',
    book: '<path d="M4 4h7a3 3 0 013 3v13H7a3 3 0 01-3-3V4zm12 0h4v16h-4V4z"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    grid: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
    cube: '<path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/>',
    func: '<path d="M4 20c4 0 6-2 6-6V6c0-2 1-3 3-3h3v2h-2c-1 0-2 1-2 2v8c0 4-2 6-6 6h-2v-2z"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>',
    lock: '<path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z"/>',
    form: '<rect x="3" y="4" width="18" height="16" rx="2"/><rect x="3" y="4" width="18" height="4" rx="2"/>',
    event: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
    report: '<rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/>',
    puzzle: '<path d="M20 8h-3V4H7v4H4v6h3v6h10v-6h3V8z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    bolt: '<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
    doc: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>',
    book2: '<path d="M4 4h7a3 3 0 013 3v13H7a3 3 0 01-3-3V4z"/>'
};
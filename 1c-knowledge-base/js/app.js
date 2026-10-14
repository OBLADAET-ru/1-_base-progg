document.addEventListener('DOMContentLoaded', async () => {
    buildSidebar();
    await loadSearchIndex();
    initSearch();

    const initialPage = location.hash.substring(1) || 'home';
    navigate(initialPage, false);

    window.addEventListener('hashchange', () => {
        const page = location.hash.substring(1) || 'home';
        navigate(page, false);
    });
});

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}
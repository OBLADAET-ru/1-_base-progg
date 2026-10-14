function attachCopyButtons() {
    document.querySelectorAll('pre .copy-btn').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true)); // убираем старые обработчики
    });
    document.querySelectorAll('pre .copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.parentElement.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const orig = btn.textContent;
                btn.textContent = '✓ Скопировано';
                setTimeout(() => btn.textContent = orig, 1500);
            });
        });
    });
}
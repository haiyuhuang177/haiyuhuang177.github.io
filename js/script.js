document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function switchTab(tabId) {
        // Remove active class from all buttons and panes
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to selected button and pane
        const selectedBtn = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedPane = document.getElementById(tabId);

        if (selectedBtn && selectedPane) {
            selectedBtn.classList.add('active');
            selectedPane.classList.add('active');
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
});

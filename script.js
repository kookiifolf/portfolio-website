// Dark/Light Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleButton.textContent = isDarkMode ? '🌞' : '🌙';
});

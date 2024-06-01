document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#theme-toggle');
    const container = document.querySelector('.container');
    
    const currentTheme = sessionStorage.getItem('theme');
    
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        container.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            container.classList.remove('light-mode');
            container.classList.add('dark-mode');
            sessionStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            container.classList.remove('dark-mode');
            container.classList.add('light-mode');
            sessionStorage.setItem('theme', 'light-mode');
        }
    });    
});

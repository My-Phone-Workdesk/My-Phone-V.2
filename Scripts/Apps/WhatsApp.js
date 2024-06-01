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

function switchChat(chatElement) {
    // Remove 'active' class from all chat elements
    const chatElements = document.querySelectorAll('.chat');
    chatElements.forEach(element => {
        element.classList.remove('active');
    });

    // Add 'active' class to the clicked chat element
    chatElement.classList.add('active');

    // Update the chat header with the selected chat name
    const chatName = chatElement.querySelector('.chat-info h4').textContent;
    document.querySelector('.chat-header h4').textContent = chatName;

    // You can add code here to load and display messages for the selected chat
}

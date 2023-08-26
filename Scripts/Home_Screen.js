function Load_Home_Screen() {
    //Play Store ( System App ) -->
    const play_store = document.body.appendChild( document.createElement('i') );
    play_store.className = "fa-brands fa-google-play";
    play_store.title = "Play Store -- System App";
    //Settings ( System App ) -->
    const settings = document.body.appendChild( document.createElement('i') );
    settings.className = "fa-solid fa-gear";
    settings.title = "Settings -- System App";
    //CMD ( System App for Laptop, Desktop and Notepad ) ==>
    //const CMD = document.body.appendChild( document.createElement('span') );
    const CMD = document.body.appendChild( document.createElement('i') );
    //CMD.style.backgroundImage = "url('../Icons/app.system.CMD.ico')";
    CMD.className = "fa-solid fa-rectangle-terminal";
    CMD.title = "CMD -- Command Prompt";
    //Clicking on App Icons -->
    CMD.addEventListener('click', function () {
        location.href = "./Apps/CMD/CMD.html";
    });
}

let electionStarted = true; // Check if the election has started

window.onload = function() {
    if (!electionStarted) {
        alert("The election has not started yet.");
    }
};

function moveHeader(headingText) {
    const header = document.getElementById('header');
    const body = document.body;
    const headingContainer = document.getElementById('heading-container');
    const messageContainer = document.getElementById('message-container');
    const voteContainer = document.getElementById('vote-container');
    const makePartyContainer = document.getElementById('make-party-container');

    // Add the fixed class to move the header to the top
    header.classList.add('fixed');

    // Change the background color to white
    body.classList.add('white-background');

    // Add the heading text
    headingContainer.innerHTML = `<h1 class="heading">${headingText}</h1>`;

    // Reset display states
    messageContainer.style.display = 'none';
    voteContainer.style.display = 'none';
    makePartyContainer.style.display = 'none';

    // Display content based on the clicked button
    if (headingText.toString().includes('Results')) {
        messageContainer.innerHTML = `<p class="message">Lala won by 9211 votes!</p>`;
        messageContainer.style.display = 'block';
    } else if (headingText.toString().includes('Vote')) {
        voteContainer.style.display = 'flex';
    } else if (headingText.toString().includes('Make a Party')) {
        let note;
        let amount;
        console.log(headingText.toString())
        if (headingText.toString() === 'Head - Make a Party') {
            note = "1. Please make sure that the election of head has started.<br>2. You must pay INR 50,000/- to create a party.<br>3. You have not created another Head or Mini Head party alongside.";
            amount = 50000;
        };
        if (headingText.toString() === 'Mini Head - Make a Party') {
            note = "1. Please make sure that the election of mini head has started.<br>2. You must pay INR 30,000/- to create a party.<br>3. You have not created another Head or Mini Head party alongside.";
            amount = 30000;
        };
        makePartyContainer.innerHTML = `
            <p class="note">${note}</p>
            <input type="text" placeholder="Party Name" id="party-name" required>
            <button id="pay-button" class="pay-button" onclick="pay(${amount})" ${electionStarted ? '' : 'disabled'}>
                Agree and pay INR ${amount}/-
            </button>
        `;
        makePartyContainer.style.display = 'flex';
    }
}

function vote() {
    const finishButton = document.getElementById('finish-election-button');
    finishButton.style.display = 'block';
    if ((!false) && true) { //yaha pe check karege ki saari voting ho gyi ya nhi
        finishButton.disabled = 'true';
    }
    alert('Voted!');
}

function finishElection() {
    alert("Election finished!");
}

function pay(amount) {
    const partyName = document.getElementById('party-name').value;
    if (partyName) {
        alert(`Payment of INR ${amount}/- successful for party: ${partyName}`);
    } else {
        alert("Please enter a party name.");
    }
}

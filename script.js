const terminalWindow = document.getElementById('terminal-window');
const terminalIcon = document.getElementById('terminal-icon');
const day = document.getElementById("day");
const time = document.getElementById("time");
const date = document.getElementById("date");


function updateTerminalVisibility() {

    if (terminalWindow.style.visibility === 'hidden') {

        terminalWindow.style.visibility = 'visible';
        terminalIcon.style.visibility = 'hidden';

    } else if (terminalWindow.style.visibility === 'visible') {

        terminalWindow.style.visibility = 'hidden';
        terminalIcon.style.visibility = 'visible';

    }
}

function openTerminal(){
    terminalIcon.style.visibility = 'hidden';
    terminalWindow.style.visibility = 'visible';
}

function closeTerminal(){
    terminalIcon.style.visibility = 'visible';
    terminalWindow.style.visibility = 'hidden';
}

function updateDateTime() {
    const now = new Date();
    const config = {hour: '2-digit', minute: '2-digit'};
    day.textContent = now.toLocaleString('default', { weekday: 'long' });
    time.textContent = "- " + now.toLocaleTimeString('default', config) + " -";
    date.textContent = now.toLocaleDateString();
}
setInterval(updateDateTime, 1000);
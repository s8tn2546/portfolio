function updateTerminalVisibility() {
    const terminalWindow = document.getElementById('terminal-window');
    const terminalWindowMinimized = document.getElementById('terminal-window-minimized');
    const isMinimized = terminalWindow.style.visibility === 'hidden';

    if (isMinimized) {
        terminalWindow.style.visibility = 'visible';
        terminalWindowMinimized.style.visibility = 'hidden';
    } else {
        terminalWindow.style.visibility = 'hidden';
        terminalWindowMinimized.style.visibility = 'visible';

    }
}

function closeTerminal(){
    const terminalWindow = document.getElementById('terminal-window');
    const terminalWindowMinimized = document.getElementById('terminal-window-minimized');
    terminalWindow.style.visibility = 'hidden';
    terminalWindowMinimized.style.visibility = 'hidden';
}

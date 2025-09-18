const terminalWindow = document.getElementById('terminal-window');
const terminalIcon = document.getElementById('terminal-icon');
const day = document.getElementById("day");
const time = document.getElementById("time");
const date = document.getElementById("date");
const terminalBody = document.getElementById("terminal-body");
const terminalInput = document.getElementById("terminal-input");
const terminalNavbar = document.getElementById("terminal-navbar");

const constantLine = `
<span id="help">Welcome to my terminal - Type <span class="highlighter">help</span> for a list of supported elements</span>
<div id="lines">
    <span id="prompt">>_ </span>
    <input type="text" autocomplete="off" autofocus id="terminal-input">
</div>
`;

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
    terminal();
    
}

function updateDateTime() {
    const now = new Date();
    const config = {hour: '2-digit', minute: '2-digit'};
    day.textContent = now.toLocaleString('default', { weekday: 'long' });
    time.textContent = "- " + now.toLocaleTimeString('default', config) + " -";
    date.textContent = now.toLocaleDateString();
}
setInterval(updateDateTime, 500);

//Dragging Logic
let isDragging = false;
let offset_x,offset_y;

terminalNavbar.addEventListener("mousedown", function(e){
    isDragging = true;
    offset_x = e.clientX - terminalWindow.offsetLeft;
    offset_y = e.clientY - terminalWindow.offsetTop;
})

document.addEventListener("mousemove", function(e){
    if(isDragging){
        terminalWindow.style.left = (e.clientX - offset_x) + "px";
        terminalWindow.style.top = (e.clientY - offset_y) + "px";
    }
})

document.addEventListener("mouseup", function(){
    isDragging = false;
})

//Terminal Logic
const commands = {
    help: `
    Supported commands:<br>
    - <span class="highlighter">about</span> → Learn who I am<br>
    - <span class="highlighter">skills</span> → My tech stack<br>
    - <span class="highlighter">projects</span> → Featured projects<br>
    - <span class="highlighter">contact</span> → How to reach me<br>
    - <span class="highlighter">clear</span> → Clear the terminal<br>
    - <span class="highlighter">resume</span> → Download my CV<br>
    - <span class="highlighter">socials</span> → Link to my socials.<br>
    - <span class="highlighter">s8tn</span> → Easter egg
  `,

  about: `
    <img src="raza.jpeg" alt="Profile Picture" style="width:100px; height:100px; border-radius:50%; margin-bottom:10px;"><br>
    Hi, I’m <span class="highlighter">Ahmed Raza Khan</span><br>
    A passionate <span class="highlighter">Developer</span> who loves building creative,
    impactful digital solutions with clean and minimal design.
  `,

  skills: `
    <span class="highlighter">Languages:</span> JavaScript, Python, Dart, C++<br>
    <span class="highlighter">Frontend:</span> HTML, CSS, Tailwind, React<br>
    <span class="highlighter">Mobile:</span> Flutter (Android/iOS)<br>
    <span class="highlighter">Backend:</span> Firebase, Node.js, Express.js<br>
    <span class="highlighter">Other:</span> Git/GitHub, UI/UX design
  `,

  projects: `
    <span class="highlighter">Notifyre</span> → Smart notification manager app<br>
    <span class="highlighter">Aastha</span> → Hackathon project detecting crop diseases<br>
    <span class="highlighter">Agency Site</span> → Purple-themed portfolio for Dzyn Buddy<br>
    <span class="highlighter">ICE Restaurant</span> → Custom website for a restaurant in Odisha<br>
  `,

  contact: `
    <span class="highlighter">Email:</span> prof.ahmedrazakhan@gmail.com<br>
    <span class="highlighter">Phone:</span> +91-9348841887<br>
    <span class="highlighter">Location:</span> India
  `,

  socials: `
    <span class="highlighter">GitHub:</span> <a href="https://github.com/yourid" target="_blank">github.com/yourid</a><br>
    <span class="highlighter">LinkedIn:</span> <a href="https://linkedin.com/in/yourid" target="_blank">linkedin.com/in/yourid</a><br>
    <span class="highlighter">Twitter:</span> <a href="https://twitter.com/yourid" target="_blank">@yourid</a>
  `,

  resume: `
    Download my <a href="resume.pdf" class="highlighter" target="_blank">Resume(PDF)</a>
  `,

  s8tn: `
    <span class="highlighter">Access granted ✅</span><br>
    <span class="highlighter">Secret:</span> <a href="">@yourid</a>
  `,

  clear: 'clear'
};


function terminal(){
    terminalBody.innerHTML = constantLine;

    const newInput = document.getElementById("terminal-input");

    newInput.addEventListener("keydown", function (e){
        if (e.key === "Enter") {
            let userInput = newInput.value.trim();
            userInput = userInput.toLowerCase();

            const commandLine = document.createElement("div");
            commandLine.id = "input";
            commandLine.textContent = ">_ " + userInput;
            terminalBody.insertBefore(commandLine, newInput.parentElement);

            if(commands[userInput]){
                if(userInput == 'clear'){
                    terminal();
                }
                else{
                    const output = document.createElement("div");
                    output.id = "output";
                    output.innerHTML = commands[userInput];
                    const gap = document.createElement("br");
                    terminalBody.insertBefore(output, newInput.parentElement);
                    terminalBody.insertBefore(gap, newInput.parentElement);
                }
            }
            else{
                const error = document.createElement("div");
                error.textContent = "Unknown command";
                const gap = document.createElement("br");
                terminalBody.insertBefore(error, newInput.parentElement);
                terminalBody.insertBefore(gap, newInput.parentElement);
            }

            newInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}

terminal()



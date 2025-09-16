const minimizebutton = document.getElementById('minimize-button');
const closebutton = document.getElementById('close-button');

minimizebutton.addEventListener('click', () => {
    alert('Minimize button clicked!');
});

closebutton.addEventListener('click', () => {
    alert('Can\'t close the terminal window!');
});

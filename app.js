const nameDisplay = document.getElementById('name-display');
const button = document.getElementById('updateButton');
const namebox = document.getElementById('name-input');
const pronounbox = document.getElementById('pronoun-input');
const pronounDisplay = document.getElementById('pronouns');
button.addEventListener('click', () => {
    console.log('i am clicking the button');
    nameDisplay.textContent = namebox.value;
    nameDisplay.style.color = 'green';
    pronounDisplay.textContent = pronounbox.value;
});
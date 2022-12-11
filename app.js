const nameDisplay = document.getElementById('name-display');
const button = document.getElementById('updateButton');
const nameBox = document.getElementById('name-input');
const pronounBox = document.getElementById('pronoun-input');
const pronounDisplay = document.getElementById('pronouns');
nameBox.addEventListener('keyup', () => {
    nameDisplay.textContent = nameBox.value;
});
button.addEventListener('click', () => {
    nameDisplay.style.color = 'green';
    pronounDisplay.textContent = pronounBox.value;
});
//capturing the grid div from the html file
const grid = document.getElementById("grid");

//this sets a 16x16 grid using children div squares and adds a hover effect
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'black';
    });
    div.addEventListener('mouseout', function() {
        div.style.backgroundColor = '';
    });
    div.style.flex = `1 0 ${100 / 16}%` ;
    div.style.aspectRatio = '1 / 1';
    grid.append(div);
};

//select the button from the html file
const button = document.querySelector('button');

//use the button to change the grid size from 1-100
button.addEventListener('click', function() {
    const userInput = prompt('1-100');
    if (userInput >= 1 && userInput <= 100) {

        //clear previous grid from the html file so we can replace it
        grid.innerHTML = '';

        //replacing the default values with the user selected one
        for (let i = 0; i < (userInput * userInput); i++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = 'black';
            });
            div.addEventListener('mouseout', function() {
                div.style.backgroundColor = '';
            });
            div.style.flex = `1 0 ${100 / userInput}%` ;
            div.style.aspectRatio = '1 / 1';
            grid.append(div);
        };
    } else {
        alert('Invalid');
    };
});
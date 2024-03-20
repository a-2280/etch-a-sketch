//capturing the grid div from the html file
const grid = document.getElementById("grid");
const rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'];

//this sets a 16x16 grid using children div squares and adds a hover effect
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    let opacity = 0;

    div.style.backgroundColor = `0, 0, 0, ${opacity}`;

    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
    });
    div.addEventListener('mouseout', function() {
        opacity = opacity + .1;
        div.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        if (opacity > 1) {
            opacity = 1;
        };
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
            let opacity = 0;

            div.style.backgroundColor = `0, 0, 0, ${opacity}`;

            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
            });
            div.addEventListener('mouseout', function() {
                opacity = opacity + .1;
                div.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            });
            div.style.flex = `1 0 ${100 / userInput}%` ;
            div.style.aspectRatio = '1 / 1';
            grid.append(div);
        };
    } else {
        alert('Invalid');
    };
});
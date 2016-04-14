console.log("Javascript is alive!");
// When the page loads:
// #1
var greeting = document.querySelector('#greeting');
greeting.innerText = "Hello, world!";
// #2
var lis = document.querySelectorAll('li');
for (var li of lis) {
    li.style.backgroundColor = 'yellow';
}
// #3
var newImg = document.createElement('img');
newImg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
greeting.appendChild(newImg);

// Afterwards:
// #1 & #2
for (var li of lis) {
    li.addEventListener('click', selectLisAndChangeImg);
}

var imageToChange = document.querySelector('#changeMe');

function selectLisAndChangeImg() {
    for (var li of lis) {
        li.classList.remove('selected');
    }
    this.className = 'selected';
    imageToChange.src = "./images/" + this.innerText + ".jpeg";
};

// #3
var grayDiv = document.querySelector('#ghosting');
grayDiv.addEventListener('mouseenter', function() {
    this.parentNode.removeChild(this);
});

// #4
var orangeDiv = document.querySelector('#resize');
var orangeDivOrigSize = orangeDiv.offsetWidth;

orangeDiv.addEventListener('mouseenter', function() {
    this.style.width = orangeDivOrigSize * 2 + "px";
});

orangeDiv.addEventListener('mouseleave', function() {
    this.style.width = orangeDivOrigSize + "px";
});

// #5
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
    lis.forEach(function(li) {
        li.classList.remove('selected');
    });
    imageToChange.src = "./images/panic.jpeg";
});

// #6
window.addEventListener('keydown', function(key) {
    if (key.keyCode >= 48 && key.keyCode <= 57) {
        window.alert("I HATE NUMBERZZZ!");
    }
});

// BONUS    up up down down left right left right B A
var code = "";
var konami = "upupdowndownleftrightleftrightBA";
window.addEventListener('keydown', function(key) {
    switch (key.keyCode) {
        case 37:
            code += "left";
            break;
        case 38:
            code += "up";
            break;
        case 39:
            code += "right";
            break;
        case 40:
            code += "down";
            break;
        case 65:
            code += "A";
            break;
        case 66:
            code += "B";
            break;
        default:
            code += "derr"
    }
    if (code.includes(konami)) {
        window.alert("HOLY FUCKBALLS BATMAN YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
        code = '';
    }

});


var answer;

/* Load starting value */
function getColorCode() {
    var o = Math.round, r = Math.random, s = 255;
    var color = 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) +  ')';    
    return color;
}

/* Load other colors for buttons */
function buttonColors(colorList) {
    for (let x = 0; x < 5; x++) {
        colorList.push(getColorCode());
    }
    return colorList;
}

/* Color buttons, and show value to guess */
function showList(colorList) {
    document.getElementById("h1_code").innerHTML = colorList[0];
    colorList = colorList.sort(function(a, b){return 0.5 - Math.random()});

    for (let x = 0; x < 6; x++) {
        var id = "button" + x;
        document.getElementById(id).style.background = colorList[x];
    }
}

/* Enable all buttons and reset borders */
function resetScreen() {
    document.querySelectorAll('button').forEach(elem => {
        elem.style.border = "4px solid black";  
    });
}

/* Call required functions */
function start() {    
    var colorList = []
    colorList.push(getColorCode());
    colorList = buttonColors(colorList);
    answer = colorList[0];
    showList(colorList);    
    resetScreen();
}

function checkColor(clicked) {
    var color = clicked.style.backgroundColor;
    if (color == answer) {
        clicked.style.border = "10px solid #33cc33";
        setTimeout(start, 1000);
    } else {
        clicked.style.border = "10px solid red";
    }
}

window.onload = start;

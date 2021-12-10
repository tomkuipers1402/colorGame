
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

    for (let x = 1; x < 7; x++) {
        var id = "button" + x;
        document.getElementById(id).style.background = colorList[x];
    }
}

/* Call required functions */
function main() {
    var colorList = []
    colorList.push(getColorCode());
    colorList = buttonColors(colorList);
    answer = colorList[0];
    showList(colorList);
}

function checkColor(clicked) {
    var color = clicked.style.backgroundColor
    if (color == answer) {
        console.log("JAA");
    }
}

window.onload = main;

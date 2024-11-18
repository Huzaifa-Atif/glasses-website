let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
let glassesOverlay = document.getElementById("glasses-overlay");
let fontSizeElement = document.getElementById("fontsize");

let glassesSize = 250;
let positionTopOffset = 180;
let positionLeftOffset = 120;

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
};


function changeGlasses(glassesSrc) {
    glassesOverlay.src = glassesSrc;
    glassesOverlay.style.display = "block";
    glassesOverlay.style.width = `${glassesSize}px`;
    glassesOverlay.style.top = `${positionTopOffset}px`;
    glassesOverlay.style.left = `${positionLeftOffset}px`; 
}


function adjustGlassesSize(type) {
    if (type === 'plus') {
        glassesSize += 9;
    } else if (type === 'minus') {
        glassesSize -= 9;
    }
    glassesOverlay.style.width = `${glassesSize}px`;
    fontSizeElement.textContent = glassesSize;
}


function PositionTop() {
    positionTopOffset -= 10;
    glassesOverlay.style.top = `${positionTopOffset}px`;
}


function PositionBottom() {
    positionTopOffset += 10; 
    glassesOverlay.style.top = `${positionTopOffset}px`;
}

function PositionLeft() {
    positionLeftOffset -= 5;
    glassesOverlay.style.left = `${positionLeftOffset}px`;
}


function PositionRight() {
    positionLeftOffset += 5;
    glassesOverlay.style.left = `${positionLeftOffset}px`;
}

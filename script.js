function blue() {
    window.onclick = document.getElementById("paragraph1").style.color = 'blue';
}

function yellow() {
    window.onclick = document.getElementById("paragraph2").style.color = 'yellow';
}

function purple() {
    window.onclick = document.getElementById("paragraph3").style.color = 'purple';
}

function fontChange1() {
    window.onclick = document.getElementById('paragraph1').style.fontFamily = 'Chonburi';
}

function fontChange2() {
    window.onclick = document.getElementById('paragraph2').style.fontFamily = 'Chonburi';
}

function fontChange3() {
    window.onclick = document.getElementById('paragraph3').style.fontFamily = 'Chonburi';
}

function drag(event) {
    event.dataTransfer.setData("text",event.target.id);
}

function drop(event) {
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function allowDrop(event) {
    event.preventDefault();
}
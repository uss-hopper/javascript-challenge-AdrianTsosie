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

function highlight1(text) {
    var paragraph1 = document.getElementById("paragraph1");
    var innerHTML = paragraph1.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        paragraph1.innerHTML = innerHTML;
    }
}

function highlight2(text) {
    var paragraph1 = document.getElementById("paragraph2");
    var innerHTML = paragraph1.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        paragraph1.innerHTML = innerHTML;
    }
}

function highlight3(text) {
    var paragraph1 = document.getElementById("paragraph3");
    var innerHTML = paragraph1.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        paragraph1.innerHTML = innerHTML;
    }
}

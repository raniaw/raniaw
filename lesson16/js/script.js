// alert("Welcome to JS ");

function showhide() {
    if (document.getElementById('img').style.display == 'block') {
        document.getElementById('img').style.display = 'none';
        document.getElementById('showhide').innerHTML = 'Show';
    } else {
        document.getElementById('img').style.display = 'block';
        document.getElementById('showhide').innerHTML = 'Hide';
    }
}

function changestyle() {
    document.getElementById('first').style.background = 'white';
    document.getElementById('first').style.border = '3px dotted green';
    document.getElementById('first').style.borderRadius = '15px';
    document.getElementById('first').style.color = 'red';
    document.getElementById('first').style.fontFamily = 'Century Gothic, Verdana, Geneva, Tahoma, Sans-Serif';

    for (var i = 0; i <= 6; i++) {

        document.getElementsByTagName('button')[i].style.backgroundColor = "yellow";
    }
    // console.log(getElementsByTagName('button').style.background);

}
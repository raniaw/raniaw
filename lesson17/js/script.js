

function styletransition() {
    document.getElementById('myDiv').style.transition='all 3s';
    // document.getElementById('myDiv').style.transform="rotatey(50deg)";//rotate y-achse 50grad
    
    // document.getElementById('first').style.border = '3px dotted green';
    // document.getElementById('first').style.borderRadius = '15px';
    // document.getElementById('first').style.color = 'red';
    // document.getElementById('first').style.fontFamily = 'Century Gothic, Verdana, Geneva, Tahoma, Sans-Serif';

    // for (var i = 0; i <= 6; i++) {

    //     document.getElementsByTagName('button')[i].style.backgroundColor = "yellow";
    // }
    // // console.log(getElementsByTagName('button').style.background);
    // var newwidth = "200px;"
    // var hello = "Hello";
    // alert(hello + " " + newwidth);
}

function changestyle2(){
    document.getElementById('myDiv').style.transform="rotate(720deg)"; // rotate 720grad
    // document.getElementById('myDiv').style.transform="rotatex(70deg)";//rotate x-achse 70grad
// document.getElementById('myDiv').style.transform="rotatey(50deg)";//rotate y-achse 50grad
}
function changeparagraph(){
    document.getElementById("first").style.backgroundColor="#e2cdcd";
}

function welcome(fname,lname){
    var welcome="Welcome ";
    document.getElementById('first').innerHTML=welcome+ " "+ fname+" "+ lname;
    
}


function showhide() {
    if (document.getElementById('img').style.display == 'block') {
        document.getElementById('img').style.display = 'none';
        document.getElementById('showhide').innerHTML = 'Show';
    } else {
        document.getElementById('img').style.display = 'block';
        document.getElementById('showhide').innerHTML = 'Hide';
    }
}
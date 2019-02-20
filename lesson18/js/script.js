function first() {
    document.getElementById('f-el').innerHTML = 'Content changed'; 
}

function second() {
    document.getElementById('f-el').innerHTML = ''; 
    document.getElementById('fv-el').innerHTML = ''; 
    document.getElementById('fr-el').innerHTML = ''; 

}

function third() {
    var x, y, z, a, b, c; 
    x = 6; 
    y = 4; 
    z = x/y; 

    a = 6; 
    b = 4; 
    c=a**b; 
    var obj={a:"a", "b":b, "c":c};

    add=x+y;// x+=y <=> x=x+y
    sub=x-y;//x-=y <=> x=x-y
    mult=x*y;//x*=y <=> x=x*y
    div=x-y;//x-=y <=> x=x-y
    inc=++x;
    dec=--y;
    console.log(div);
    
    window.alert("Result "+ z); 
    document.getElementById('s-el').innerHTML = "Result of 'x/y=z':"+z;
    document.getElementById('s-el').style.fontSize='20px';
    document.getElementById('t-el').innerHTML = "Result of obj 'a^b=c': "+ obj.c;
    document.getElementById('t-el').style.fontSize='20px';
    document.getElementById('fr-el').innerHTML =
    "add: "+add+"</br>"+
    "sub: "+sub+"</br>"+
    "mult: "+mult+"</br>"+
    "div: "+div+"</br>"+
    "inc: "+inc+"</br>"+
    "dec: "+dec+"</br>";
}

function showname(){
    var myname="Rania";

    document.getElementById('fv-el').innerHTML=myname; 
    document.getElementById('fv-el').style.fontFamily="Gothic Centure, Verdana";
    document.getElementById('fv-el').style.fontSize='30px';
}
function showhide() {
    var mysurname="Wittenberg";

    document.getElementById('fr-el').innerHTML=mysurname; 
    document.getElementById('fr-el').style.fontFamily="Gothic Centure, Verdana";
    document.getElementById('fr-el').style.fontSize='30px';

    if (document.getElementById('fr-el').style.display == 'block') {
        document.getElementById('fr-el').style.display = 'none';    
        document.getElementById('fr-el').innerHTML = "";
    } else {
        document.getElementById('fr-el').style.display = 'block';
        document.getElementById('fr-el').innerHTML = mysurname;
    }
}
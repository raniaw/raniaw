function first() {
    document.getElementById('f-el').innerHTML = 'Content changed'; 
}

function second() {
    document.getElementById('f-el').innerHTML = ''; 

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

    inc=++x;
    dec=--y;
  
    
    window.alert("Result "+ z); 
    document.getElementById('s-el').innerHTML = "Result of 'x/y=z':"+z;
    document.getElementById('s-el').style.fontSize='20px';
    document.getElementById('t-el').innerHTML = "Result of obj 'a^b=c': "+ obj.c;
    document.getElementById('t-el').style.fontSize='20px';
    document.getElementById('fr-el').innerHTML =
    "inc: "+inc+"</br>"+
    "dec: "+dec+"</br>";
}

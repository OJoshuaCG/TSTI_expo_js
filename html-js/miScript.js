//window.onload=function(){alert('Bienvenido a esta pagina');}
//window.onload = prompter
document.oncontextmenu = function(){return true}

document.onmousedown = function(){return true;}

//document.onkeydown = function(){alert("KeyDown")}


function mensaje(){

    nombre = document.getElementById("nombre").value
    //alert(nombre)

    document.body.innerHTML += "<h1 id='target'> Hola "+nombre+ "</h1>"

    document.body.innerHTML += "<div> <p> Hola mundo</p> </div>"

    document.body.innerHTML += '<input type="button" value="Imprime esta página" onclick="window.print()">'
     
    parpadea()

    document.body.innerHTML += '<button onclick="confirmacion()"> Visitar google </button>'
}

window.setInterval (parpadea, 500);
let color = "red";

function parpadea () {
    var target = document.getElementById ("target");
    color = (color == "#ffffff")? "red" : "#ffffff";
    target.style.color = color;
    //blink.style.fontSize='36px';
}


function confirmacion() {
	let pregunta = confirm("¿Deseas visitar google?")
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "https://google.com/";
	}
	else{
		alert("Quizás eres mas de Yahoo!...\n Gracias de todas formas")
	}
}

function prompter() {
    let res = prompt("Buenas ¿cuál es tu nombre?", "")
    alert ( "Es un gusto tenerte aquí " + res + "!")
}



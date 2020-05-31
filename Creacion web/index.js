//Alerta Inicio
var Saludos = "Bienvenidos a Viajamos con Examenes";
alert(Saludos);

//foto
function newPicture (){

	document.getElementById("foto").src="valley.jpg";
	document.getElementById("foto").style.borderRadius="20px";
}

function oldPicture (){

	document.getElementById("foto").src="travelworld1.jpg";
	document.getElementById("foto").style.borderRadius="20px";
}

//foto1
function newPicture1 () {

	document.getElementById("foto1").src="beach.jfif";
	document.getElementById("foto1").style.borderRadius="20px";

}

function oldPicture1 (){

	document.getElementById("foto1").src="travelworld3.jpg";
	document.getElementById("foto1").style.borderRadius="20px";
}

function mouseOver(){

	document.getElementsByClassName('titulo1').style.backgroundColor="pink";
}

function mouseOut(){

	document.getElementsByClassName('titulo1').style.backgroundColor="";
}
function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}

function tweet() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
	}
}

	
function doTweet(tweetText) {

	var elemento = document.createElement("div");

	var porhacer = document.getElementById("porhacer");

	//Crear el elemento
	elemento.className = "tweet";
	elemento.innerHTML = '<div class="checkbox boxcheck">' + '<label><input type="checkbox" onclick="hacer_click(this)"></label>' + '</div>' + tweetText + '<a class="btn btn-default pull-right" href="#" role="button" onclick="borrar(this)">' + '<i class="fa fa-trash" aria-hidden="true"></i>' + '</a>';

	porhacer.appendChild(elemento);

	// var ex = porhacer.lastChild;

}

var contador=0;

function hacer_click(elemento){
	
	var subrayado = elemento.parentElement.parentElement.parentElement;
	
	var hechas = document.getElementById('hechas')
	var porhacer = document.getElementById('porhacer')

	var x = elemento.checked;

	if (x==true){
		subrayado.classList.add('rayados')
		hechas.appendChild(subrayado)
	}

	if (x==false){
		subrayado.classList.remove('rayados')
		porhacer.appendChild(subrayado)
	}

}

function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}

function borrar(elemento){

	var tarea = elemento.parentElement;

	tarea.remove();
	
}
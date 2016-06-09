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
	// subrayado.classList.toggle('rayados')

		contador++;
	if (contador%2 ==0) {
		subrayado.classList.remove('rayados')	
		var porhacer = document.getElementById("porhacer")
	   	porhacer.appendChild(subrayado);
	}

	else {
		// contador++;
		subrayado.classList.add('rayados')		
		var hechas = document.getElementById("hechas");
		hechas.appendChild(subrayado);	
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
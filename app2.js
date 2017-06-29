var lokacija = document.getElementById("from");
var destinacija = document.getElementById("to");
var lista = document.getElementById("lista");


function addToList() {
	var routes = []; 
		if(!lokacija && !destinacija) {
			return;
		}
		if(routes.indexOf(lokacija) == -1 && routes.indexOf(destinacija) == -1) {
		routes.push(lokacija.value + " - " + destinacija.value + " ");
		}
	
	for(var i = 0; i < routes.length; i++) {
		 {
			lista.innerHTML += routes[i] + "<br>";
		}
	}	
	
	$("#error").css("visibility", "visible");
	$("#lista").css("display", "block");
	
}



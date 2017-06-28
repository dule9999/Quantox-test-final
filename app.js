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
	
	$("#lista").css("visibility", "visible");
	$("#error").css("visibility", "visible");
	$("#lista").css("position", "absolute");
	$("#lista").css("display", "block");
	$("#lista").css("right", "0");
	$("#lista").css("margin-right", "100px");
	$("#lista").css("background-color", "#f9fbff");
	$("#lista").css("padding", "10px");
}

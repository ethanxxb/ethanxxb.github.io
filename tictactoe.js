var character = "o";
function turn(location) {
	if(document.getElementById(location).innerHTML == "") {

		if(character == "x"){
			character = "o";
		}
	    
		else{
			character = "x";
	    }

	    document.getElementById(location).innerHTML = character;
	}
}

function clearALL(){

	document.getElementById("r1c1").innerHTML = "";
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
    document.getElementById("r3c3").innerHTML = "";
}
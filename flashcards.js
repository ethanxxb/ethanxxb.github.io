
function addNumbers (){
	var operand1 = document.getElementById("operand1").value;
	var operand2 = document.getElementById("operand2").value;
	var sum = ParseInt(operand1) + ParseInt(operand2);
	alert(sum); 

}
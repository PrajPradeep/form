
function validation(){

	/*for name*/
	var Fname = document.getElementById('fname').value;
	var	Lname = document.getElementById('lname').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var other = document.getElementById('other').checked;
	var	math = document.getElementById('math').checked;
	var	phy = document.getElementById('physics').checked;
	var che = document.getElementById('chemistry').checked;
	var password = document.getElementById('password').value;
	 var re_password = document.getElementById('re-password').value;

	if(Fname=="" )
	{
		alert('Name cannot be empty');
		document.getElementById('fname').focus();
		return false;
	}
	else if (Lname == ""){
		alert('Name cannot be empty');
		document.getElementById('lname').focus();
		return false;
	}
	/*for gender selection*/
	else if( (male == '') && (female == '') && (other == '')){
		alert('select the gender');
		return false;
	}
	/*select he subject*/
	else if ((math == false) && (phy ==false) && (che == false)) {
		alert('select atlest one subject');
		return false;
	}

	 /*for password*/
	 else if (password == "" ) {
	 	alert('password cannot be empty');
	 	document.getElementById('password').focus();
	 	return false;
	 }
	 else if (password.length<6){
	 	alert('password length must be more than 6 letter');
	 	document.getElementById('password').focus();
	 	return false;
	 }
	 else if (re_password == "" ) {
	 	alert('password cannot be empty');
	 	document.getElementById('re-password').focus();
	 	return false;
	 }
	 else if (re_password.length<6){
	 	alert('password length must be more than 6 letter');
	 	document.getElementById('re-password').focus();
	 	return false;
	 }
	 else if (password != re_password) {
	 		alert('password not match');
	 		return false;
	 }
	 else{
	 	return true;
	 }

}

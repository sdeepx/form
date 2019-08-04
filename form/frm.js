function signUp() {
	var fname, sname, uname, psswrd, phone;
	fname = document.getElementById('fname').value;
	sname = document.getElementById('sname').value;
	uname = document.getElementById('phone').value;
	psswrd = document.getElementById('uname').value;
	phone = document.getElementById('psswrd').value;

	var lfname, lsname, luname, lpsswrd, lphone;
	lfname = fname.length;
	lpsswrd = psswrd.length;
	lsname = sname.length;
	luname = uname.length;
	lphone = phone.length;

	

	if (lfname <= 2 || lfname > 25 ) {
		
			alert("Please enter a currect Firstname");
	}

	if (lsname <= 2 || lsname > 25 ) {
		
			alert("Please enter a currect Surname ");
			
	}

	if (lphone < 10 || lphone > 10) {
		
			alert("Please enter a currect phone number ");
			
		
	}


	if (lpsswrd < 5 ) {
		alert("Please enter a strong password ");
		
	}

}
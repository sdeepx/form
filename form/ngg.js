function guess() {

	var num = document.getElementById("number").value; 
	var random_no = Math.floor(Math.random() * 50 + 1); 

	var guess = 1; 
	var o_g = 6;
			 

		if(num == random_no) 
		{	 
			alert("CONGRATULATIONS!!! You Are Win!! "); 
		} 
		else if(num > random_no) 
		{	 
			guess++; 
			alert("OOPS!! almost close ! Try a smaller number"); 
		} 
		else if ( num < random_no )
		{ 
			guess++; 
			alert("OOPS!! almost close ! Try a greater number");
		} 

		if (guess == o_g) {
			alert("You don't have any chances ! You Lose !");
			
		}

} 


function calculateBMI() {
	// Get input values
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var isMetric = document.getElementById("metric").checked;
	var gender = document.querySelector('input[name="gender"]:checked').value;
	var Age = document.getElementById("Age").value;
	console.log(gender, Age);
	
	// Calculate BMI
	if (isMetric) {
		var bmi = weight / ((height*0.01) * (height*0.01)) ;
	} else {
		var bmi = (weight * 703) / (height * height);
	}
	//Validate the parameters
	if (Age <= 0 || weight <= 0 || height <= 0)
	{
		alert('Please enter a valid parameters of Weight/Height/Age');
		return false;
	}
	
	if (Age < 18){
	// BMI categories for children and adolescents
		if (bmi < 18.5) {
		  category = "Underweight";
		  link = ""
		} else if (bmi >= 18.5 && bmi <= 24.9) {
		  category = "Normal weight";
		  link = ""
		} else if (bmi >= 25.0 && bmi <= 29.9) {
		  category = "Overweight";
		  link = ""
		} else if (bmi >= 30.0 && bmi <= 34.9) {
		  category = "Obesity Class I";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		} else if (bmi >= 35.0 && bmi <= 39.9) {
		  category = "Obesity Class II";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		} else {
		  category = "Obesity Class III";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		}	
	}	
	else if (Age > 18 && gender == 'female'){
	// BMI categories for adult females
	link = "";
		if (bmi < 20.0) {
		  category = "Underweight";
		  link = "<a href='https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' target='_blank'>Know more about healthcare connect in ontario</a>";
		} else if (bmi >= 20.0 && bmi <= 24.9) {
		  category = "Normal weight";
		  link = "<a href='https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' target='_blank'>Know more about healthcare connect in ontario</a>";
		} else if (bmi >= 25.0 && bmi <= 29.9) {
		  category = "Overweight";
		  link = "<a href='https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' target='_blank'>Know more about healthcare connect in ontario</a>";
		} else if (bmi >= 30.0 && bmi <= 34.9) {
		  category = "Obesity Class I";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		} else if (bmi >= 35.0 && bmi <= 39.9) {
		  category = "Obesity Class II";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		} else {
		  category = "Obesity Class III";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		}
	}
	else if (Age > 18 && (gender == 'male' || gender == 'other'))
	{
		// BMI categories for adult males
		if (bmi < 22.0) {
		  category = "Underweight";
		  link = "<a href='https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' target='_blank'>Know more about healthcare connect in ontario</a>";
		} else if (bmi >= 22.0 && bmi <= 24.9) {
		  category = "Normal weight";
		  link = "<a href='https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' target='_blank'>Know more about healthcare connect in ontario</a>";
		} else if (bmi >= 25.0 && bmi <= 29.9) {
		  category = "Overweight";
		  link = "<a href='https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner' target='_blank'>Know more about healthcare connect in ontario</a>";
		} else if (bmi >= 30.0 && bmi <= 34.9) {
		  category = "Obesity Class I";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		} else if (bmi >= 35.0 && bmi <= 39.9) {
		  category = "Obesity Class II";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		} else {
		  category = "Obesity Class III";
		  link = "<a href='Find_Doctor.html'>Find medical practitioner to check more on other parameters.</a>";
		}
	}
	
	
	// Update result
	document.getElementById("result").removeAttribute("hidden");
	document.getElementById("bmi").innerHTML = bmi.toFixed(1);
	document.getElementById("category").innerHTML = category;
	document.getElementById("link").innerHTML = link;
	if(isMetric){
		document.getElementById("comment").innerHTML = "NOTE: BMI calculated in kilogram and centimeter "
	}
	else{
		document.getElementById("comment").innerHTML = "NOTE: BMI calculated in pounds and inches"
	}
	return true;
}
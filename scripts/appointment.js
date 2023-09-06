const nameDropdown = document.getElementById("nameDropdown");
const LocalityDropdown = document.getElementById("locDropdown");
const datePicker = document.getElementById("datePicker");
var table = document.getElementById("doctable");
const nextButton = document.getElementById("nextButton");
const patientNameLabel = document.getElementById("patientNameLabel");
const patientNameInput = document.getElementById("patientNameInput");
const patientNumbLabel = document.getElementById("patientNumbLabel");
const patientNumbInput = document.getElementById("patientNumbInput");
const searchResults = document.getElementById('results');
const bookAppointmentButton = document.getElementById("bookApptBtn");
const okBtn = document.getElementById("modalOkBtn");
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');

function loadTable(callback) { // Get the table elements
  // Create an empty array to store the table data
  var tableData = [];

  // Loop through the table rows and add the data to the array
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var rowData = {
		Name: row.cells[0].innerHTML,
		Locality: row.cells[1].innerHTML,
    };
    tableData.push(rowData);
  }
   console.log(tableData);
  // Call the callback function with the table data
  callback(tableData);
}



function populateDropdowns(tableData) { // Loop through the table data and populate the dropdowns

	for (var i = 0; i < tableData.length; i++) 
	{
		// Get the row data
		var name = tableData[i].Name;
		var locality = tableData[i].Locality;

		// Create an option element for each dropdown
		var nameOption = document.createElement("option");
		nameOption.text = name;
		nameDropdown.add(nameOption);

		var locOption = document.createElement("option");
		locOption.text = locality;
		LocalityDropdown.add(locOption);
	}
}




datePicker.addEventListener("input", () => {
  // Get the selected date
  const selectedDate = datePicker.value;
  
});

// Add event listeners to the dropdowns
nameDropdown.addEventListener("change", enableDatePicker);
LocalityDropdown.addEventListener("change", enableDatePicker);



// Function to enable/disable date picker based on dropdown values
function enableDatePicker() {
  // Check if all dropdowns have a value selected
  if (nameDropdown.value && LocalityDropdown.value ) {
    // Enable the date picker
    datePicker.disabled = false;
    datePicker.min = new Date().toISOString().split("T")[0]; // only allow future dates
  } else {
    // Disable the date picker
    datePicker.disabled = true;
    datePicker.value = "";
  }
}

// Load the table and populate the dropdowns
loadTable(populateDropdowns);


// Hide the patient name input field and "Book Appointment" button by default
patientNameLabel.style.display = "none";
patientNumbLabel.style.display = "none";
bookAppointmentButton.style.display = "none";
patientNameInput.style.display = "none";
patientNumbInput.style.display = "none";

// Add an event listener to the "Next" button
nextButton.addEventListener("click", () => { // Get the selected date from the date picker input
	const selectedDate = new Date(datePicker.value);
	// Get the current date
	const today = new Date();
	if (selectedDate < today) {
		// Display an alert message to the user
		alert("Please write or select future date for your appointment.");
		return; 
	}
	// Check if all the required fields are selected
	if (nameDropdown.value && locDropdown.value && datePicker.value) {
		// Show the patient name input field and "Book Appointment" button
		patientNameLabel.style.display = "block";
		patientNameInput.style.display = "block";
		patientNumbLabel.style.display = "block";
		patientNumbInput.style.display = "block";
		bookAppointmentButton.style.display = "block";
	}
	else{
		alert("Please select Doctor and locality , date");
    return; 
	}
});


/* Function to display the modal */
function displayModal() {
  modalOverlay.style.display = 'block';
}

/* Function to close the modal */
function closeModal() {
	modalOverlay.style.display = 'none';
	// Reset the values of the input fields
	patientNameInput.value = "";
	patientNumbInput.value = "";
	datePicker.value = "";
	nameDropdown.selectedIndex = 0;
	LocalityDropdown.selectedIndex = 0;
	// Hide the fields
	patientNameLabel.style.display = "none";
	patientNumbLabel.style.display = "none";
	bookAppointmentButton.style.display = "none";
	patientNameInput.style.display = "none";
	patientNumbInput.style.display = "none";
}


 function validatePatientNumber(input) {
  // check if input is a string and has length 10
  if (typeof input === "string" && input.length === 10) {
    // check if input contains only digits
    for (let i = 0; i < input.length; i++) {
      if (isNaN(parseInt(input[i]))) {
		return false; // input contains non-digit characters, return false
      }
    }
    return true; // input contains only digits, return true
	} else {
    return false; // input is not a string of length 10, return false
	}
}


function validatePatientName(input) {
  // check if input is a string
	if (typeof input === "string") {
		// loop over each character of the input
		for (let i = 0; i < input.length; i++) {
			const charCode = input.charCodeAt(i);
			// check if character is not an uppercase or lowercase letter or space in the name
			if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && !(charCode === 32)) {
				return false; // input contains non-alphabetic characters, return false
			}
		}
	return true; // input contains only alphabetic characters, return true
	} else {
    return false; // input is not a string, return false
  }
}



// When the user clicks on the button, open the modal
var bookApptBtn = document.getElementById("bookApptBtn");
bookApptBtn.onclick = function() {
	// Validate patient name and number inputs
	if ( patientNameInput.value.trim() === "" || patientNumbInput.value.trim() === "" ) {
		alert("Please enter your name and phone number.");
		return;
	}

	if (validatePatientNumber(patientNumbInput.value) && validatePatientName(patientNameInput.value)) {
	   // Get selected date from datepicker
		const selectedDate = datePicker.value;
		// Set the modal text with the appointment date
		searchResults.innerHTML = `Dear ${patientNameInput.value}, <br> Your appointment is booked on ${selectedDate}.`;		  
		displayModal();
	} else {
		alert("Please enter valid 10 digit phone number and name which contains only alphabets");
		return;
	} 
  
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modalOverlay) {
		modalOverlay.style.display = "none";
		// Reset the values of the input fields
		patientNameInput.value = "";
		patientNumbInput.value = "";
		datePicker.value = "";
		nameDropdown.selectedIndex = 0;
		LocalityDropdown.selectedIndex = 0;
  }
}


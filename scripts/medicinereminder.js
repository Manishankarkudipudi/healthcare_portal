// Get the HTML elements
const medicineNameInput = document.getElementById('medicine-name');
const medicineNameError = document.getElementById('medicine-name-error');
const dosageInput = document.getElementById('dosage');
const frequencySelect = document.getElementById('frequency');
const timeInput = document.getElementById('time');
const cardContainer = document.querySelector('.card-container');
const setReminderButton = document.querySelector('button');
const reminderForm = document.querySelector('#reminder-form');

// Define variables to store the selected option
let selectedOption = null;

// Define function to select an option
function selectOption(option) {
  // Deselect the previously selected option, if any
  const previouslySelected = cardContainer.querySelector('.selected');
  if (previouslySelected) {
    previouslySelected.classList.remove('selected');
  }

  // Select the new option
  selectedOption = option;
  const selectedCard = cardContainer.querySelector(`[onclick="selectOption('${option}')"]`);
  selectedCard.classList.add('selected');
}

// Define function to validate input values and display error messages
function validateInput() {
  // Validate medicine name

  if (medicineNameInput.value === '') {
    medicineNameError.innerHTML = 'Please enter the name of the medicine.';
	console.log('Please enter the name of the medicine.');
	return false;
  } else {
    medicineNameError.innerHTML = '';
  }

  // Validate dosage
  const dosage = dosageInput.value;
  const dosageError = document.getElementById('dosage-error');
  if (!dosage) {
    dosageError.innerHTML = 'Please enter the dosage of the medicine.';
	return false;
  } else {
    dosageError.innerHTML = '';
  }

  // Validate frequency
  const frequency = frequencySelect.value;
  const frequencyError = document.getElementById('frequency-error');
  if (frequency === '') {
    frequencyError.innerHTML = 'Please enter the dosage of the medicine.';
	return false;
  } else {
    frequencyError.innerHTML = '';
  }

  // Validate time
  const time = timeInput.value;
  const timeError = document.getElementById('time-error');
  if (!time) {
    timeError.innerHTML = 'Please enter the time of the medicine.';
	return false;
  } else {
    timeError.innerHTML = '';
  }

  // Return true if all input values are valid, otherwise false
  return true;
}




// Define function to set a reminder
function setReminder() {
  // Get the input values
  const medicineName = medicineNameInput.value;
  const dosage = dosageInput.value;
  const frequency = frequencySelect.value;
  const time = timeInput.value;

    // Construct the reminder message
  let reminderMessage = `Take ${medicineName} ${dosage}mg ${frequency} at ${time}.`;

	  if (selectedOption === 'before-dinner') {
		reminderMessage += ' Take it before dinner.';
	  } else if (selectedOption === 'after-dinner') {
		reminderMessage += ' Take it after dinner.';
	  }
	  // Validate input values and display error messages
	const isValid = validateInput();
	if (isValid)
	{	
     alert (reminderMessage);
	}
	const fields = ["medicine-name", "dosage", "time"];
	fields.forEach((field) => {
	document.getElementById(field).value = "";
	});
	return true;
}



// Add event listeners to the HTML elements
cardContainer.addEventListener('click', (event) => {
  if (event.target.closest('.w3-card-4')) {
    selectOption(event.target.closest('.w3-card-4').getAttribute('onclick').match(/'([^']+)'/)[1]);
  }
});


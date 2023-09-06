const searchForm = document.getElementById('search-form');
const searchResults = document.getElementById('search-results');
const closeModalButton = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');

/* Function to display the modal */
function displayModal() {
  modalOverlay.style.display = 'block';
}

/* Function to close the modal */
function closeModal() {
  modalOverlay.style.display = 'none';
}

/* Event listener for the search form submission */
searchForm.addEventListener('submit', (event) => {
  
  event.preventDefault(); // prevent form submission
	 
	var radioButtons = document.getElementsByName('healthcare');
	
	  // Initialize a variable to track if any radio button is selected
	var isSelected = false;

	// Loop through all radio buttons
	for(var i = 0; i < radioButtons.length; i++) {

	  // Check if the current radio button is selected
	  if(radioButtons[i].checked) {
		isSelected = true; // Set the flag to true
		break; // Exit the loop since one radio button is already selected
	  }
	}
	
	// If no radio button is selected, show an alert
	if(!isSelected) {
	  alert("Please select one of the radio buttons!");
	  return false;
	}
  
  if (document.getElementById("healthconnect").checked){
		searchResults.innerHTML = "";
		var resultText = "You have choosen to register with healthcare connect service.So, here A nurse will help you find a doctor or nurse practitioner who is accepting a new patients.\nYou can click here to Register Online or can register by phone at 811 , 24 hours a day, 7 days a week.\n";
		var resultParagraph = document.createElement("p");
		resultParagraph.textContent = resultText;
		var resultLink = document.createElement("a");
		resultLink.textContent = "Register Online Here";
		resultLink.href = "https://hcc3.hcc.moh.gov.on.ca/HCCWeb/faces/layoutHCCHomePage.xhtml";
		resultLink.target = "_blank";
		resultParagraph.appendChild(resultLink);
		searchResults.appendChild(resultParagraph);
  }
  else {
	searchResults.innerHTML = "";
	var paragraph = document.createElement("p");
	var text = "Contact an Ontario physician directly to ask if they are accepting new patients.";
	paragraph.textContent = text;
	var list = document.createElement("ul");
	var item1 = document.createElement("li");
	var item1Link = document.createElement("a");
	var item2 = document.createElement("li");
	var item3 = document.createElement("li");
	var item4 = document.createElement("li");

	item1Link.textContent = "Use The College of Physicians and Surgeons of Ontario’s - Find a Doctor search.";
	item1Link.href = "https://doctors.cpso.on.ca/?search=general";
	item1Link.target = "_blank";
	item1.appendChild(item1Link);
	item2.textContent = "Choose “Advanced Search” to find a doctor near you (by city/town or postal code).";
	item3.textContent = "Click on “Additional Search Options” to narrow your search (to family doctors and/or language spoken).";
	item4.textContent = "Contact the doctor to check if they are accepting new patients.";

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);
	list.appendChild(item4);
	paragraph.appendChild(list);
	searchResults.appendChild(paragraph);
  }
  
  // display the modal with the search results
  displayModal();
  return true;
});

/* Event listener for the close modal button */
closeModalButton.addEventListener('click', closeModal);



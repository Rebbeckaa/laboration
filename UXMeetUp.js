// Hämta element från DOM
const readMoreBtn = document.getElementById('readMoreBtn');
const moreInfoContent = document.getElementById('moreInfoContent');
const registrationForm = document.querySelector('.registration-form');

// ==========================================
// Read More / Show Less 
// ==========================================
readMoreBtn.addEventListener('click', function() {
  if (moreInfoContent.style.display === 'none') {
    moreInfoContent.style.display = 'block';
    readMoreBtn.textContent = 'Show Less';
  } else {
    moreInfoContent.style.display = 'none';
  }
});

// ==========================================
// Formulär & Validering
// ==========================================

// Hjälpfunktion för att ta bort tidigare felmeddelanden
function clearErrors() {
  const existingErrors = registrationForm.querySelectorAll('.error-message');
  existingErrors.forEach(error => error.remove());
}

// Hjälpfunktion för att visa felmeddelande under ett fält
function showError(inputElement, message) {
  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.textContent = message;

  // Lägger till felet direkt under input-fältet
  inputElement.parentNode.appendChild(errorElement);
}

// Enkel kontroll av att e-postadressen ser ut som en e-postadress
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stoppar formuläret från att skickas direkt
  clearErrors();

  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddr');
  let isValid = true;

  // -------------------------------------------------------------
  // Namnvalidering
  // Fixat: kollade tidigare emailInput istället för nameInput
  // -------------------------------------------------------------
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Namn får inte vara tomt.');
    isValid = false;
  }

  // -------------------------------------------------------------
  // E-postvalidering
  // Fixat: dubbelnegationen (!x !== '') gjorde att villkoret
  // aldrig fungerade som tänkt. Nu kollas både tomt fält och
  // ogiltigt format.
  // -------------------------------------------------------------
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Vänligen ange en giltig e-postadress.');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'E-postadressen ser inte ut att vara giltig.');
    isValid = false;
  }

  // Om formuläret är giltigt
  if (isValid) {
    alert('Anmälan skickad!');
    registrationForm.reset();
  }
});

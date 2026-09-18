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

// Hjälpfgunktion för att visa felmeddelande under ett fält
function showError(inputElement, message) {
  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.style.color = 'red';
  errorElement.style.fontSize = '12px';
  errorElement.style.marginTop = '4px';
  errorElement.style.display = 'block';
  errorElement.textContent = message;
  
  // Lägger till felet direkt under input-fältet
  inputElement.parentNode.appendChild(errorElement);
}

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stoppar formuläret från att skickas direkt
  clearErrors();

  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddr');
  let isValid = true;

  // -------------------------------------------------------------
  // Namnvalidering
  // -------------------------------------------------------------
  if (nameInput.value.trim() === '') { 
    showError(nameInput, 'Namn får inte vara tomt.');
    isValid = false;
  }

  // -------------------------------------------------------------
  // E-postvalidering
  // -------------------------------------------------------------
  if (emailInput.value.trim() === '') { 
    showError(emailInput, 'Vänligen ange en giltig e-postadress.');
    isValid = false;
  }

  // Om formuläret mot förmodan blir giltigt
  if (isValid) {
    alert('Anmälan skickad!');
    registrationForm.reset();
  }
});

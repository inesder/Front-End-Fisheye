// Fonction pour afficher la modale du formulaire de contact
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';// Affiche la modale en changeant le style de display
  modal.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  const contactButton = document.querySelector('.contact_button');
  if (contactButton) {
    contactButton.addEventListener('click', displayModal);
  }
});

// Fonction pour fermer la modale du formulaire de contact
function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';// Cache la modale
}

// Écouteur d'événements pour fermer la modale avec la touche "Escape"
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Écouteur d'événements pour le formulaire de contact pour prévenir la soumission standard
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche la soumission standard du formulaire

  // Récupère les valeurs des champs du formulaire
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Affiche les valeurs dans la console
  /* eslint-disable no-console */
  console.log('Prénom:', firstname);
  console.log('Nom:', lastname);
  console.log('Email:', email);
  console.log('Message:', message);
  /* eslint-enable no-console */
  closeModal(); // Ferme la modale après la soumission
});

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.addEventListener('keydown', function(event){
    if (event.key === "Escape"){
        closeModal();
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission standard du formulaire

    // Récupère les valeurs des champs du formulaire
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Affiche les valeurs dans la console
    console.log("Prénom:", firstname);
    console.log("Nom:", lastname);
    console.log("Email:", email);
    console.log("Message:", message);

    closeModal(); // Ferme la modale après la soumission
});
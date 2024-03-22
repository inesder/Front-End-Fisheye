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
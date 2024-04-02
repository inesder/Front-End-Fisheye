import { MediaFactory } from '../factories/photographer.js';


document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('Close dialog');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
});

function closeLightbox(){
    const modal = document.getElementById("lightbox_modal");
    modal.style.display = "none";

}



function setupNavigation(onLeftClick, onRightClick) {
    const leftArrowBtn = document.querySelector('.left-btn');
    const rightArrowBtn = document.querySelector('.right-btn');

    leftArrowBtn.onclick = onLeftClick;
    rightArrowBtn.onclick = onRightClick;
}


export function displayLightbox(index, medias) {
    console.log("Index:", index, "Medias Length:", medias.length, "Current Media:", medias[index]);

    const mediaData = medias[index];
    
    const modal = document.getElementById("lightbox_modal");
    const contentContainer = modal.querySelector(".lightbox-content");

    // Effacer le contenu précédent
    contentContainer.innerHTML = '';
    
    const media= new MediaFactory(mediaData);
    const mediaElement = media.render();
    console.log(mediaElement);
    contentContainer.appendChild(mediaElement);

    const imageTitle = document.createElement("p");
    imageTitle.textContent= (medias[index].title)
    contentContainer.appendChild(imageTitle);

    const leftArrow_btn = document.createElement("a");
    leftArrow_btn.classList.add("left-btn");
    leftArrow_btn.setAttribute("aria-label", "Previous image");

    const leftArrow = document.createElement("img");
    leftArrow.setAttribute("src", "./assets/icons/chevron-left-solid.svg");
    leftArrow_btn.appendChild(leftArrow);
    contentContainer.appendChild(leftArrow_btn);

    const rightArrow_btn = document.createElement("a");
    rightArrow_btn.classList.add("right-btn");
    rightArrow_btn.setAttribute("aria-label","Next image")

    const rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "./assets/icons/chevron-right-solid.svg");
    rightArrow_btn.appendChild(rightArrow);
    contentContainer.appendChild(rightArrow_btn);

    
    

    // Configuration de la navigation
    setupNavigation(
        () => {
            // Action pour la flèche gauche : afficher le média précédent
            let newIndex = (index - 1 + medias.length) % medias.length;
            displayLightbox(newIndex, medias);
        },
        () => {
            // Action pour la flèche droite : afficher le média suivant
            let newIndex = (index + 1) % medias.length;
            displayLightbox(newIndex, medias);
        }
    );

	modal.style.display = "block";
    modal.focus();

}
import MediaFactory from '../factories/photographer.js';// Importation de MediaFactory

// Fonction pour fermer la lightbox
function closeLightbox() {
  // Sélectionne la modale de la lightbox par son ID et la cache
  const modal = document.getElementById('lightbox_modal');
  modal.style.display = 'none';
}

// Attache un écouteur d'événements pour exécuter du code après le chargement complet du DOM
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeLightboxBtn');// Obtient le bouton de fermeture de la lightbox
  // Si le bouton existe, lui attache un écouteur d'événements pour fermer la lightbox au clic
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }
});

// Attache un écouteur d'événements pour fermer la lightbox avec la touche "Escape"
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

// Fonction pour configurer les boutons de navigation (gauche et droite) de la lightbox
function setupNavigation(onLeftClick, onRightClick) {
  // Sélectionne les boutons de navigation
  const leftArrowBtn = document.querySelector('.left-btn');
  const rightArrowBtn = document.querySelector('.right-btn');

  // Attribue les fonctions de callback pour les événements de clic
  leftArrowBtn.onclick = onLeftClick;
  rightArrowBtn.onclick = onRightClick;
}

// Fonction pour afficher la lightbox avec le média sélectionné
export function displayLightbox(index, medias, photographerName) {
  // console.log("Index:", index, "Medias Length:", medias.length, "Current Media:", medias[index]);

  const mediaData = medias[index]; // Récupère les données du média actuel

  // Sélectionne la modale de la lightbox et le conteneur pour le contenu
  const modal = document.getElementById('lightbox_modal');
  const contentContainer = modal.querySelector('.lightbox-content');

  // Effacer le contenu précédent
  contentContainer.innerHTML = '';

  // Crée l'élément média à afficher dans la lightbox
  const media = MediaFactory.create(mediaData, photographerName);
  const mediaElement = media.render();
  // console.log(mediaElement);
  contentContainer.appendChild(mediaElement);

  // Ajoute le titre du média
  const imageTitle = document.createElement('p');
  imageTitle.textContent = (medias[index].title);
  contentContainer.appendChild(imageTitle);

  // Crée et ajoute les boutons de navigation dans la lightbox
  const leftArrowBtn = document.createElement('button');
  leftArrowBtn.classList.add('left-btn');
  leftArrowBtn.setAttribute('aria-label', 'Previous image');

  const leftArrow = document.createElement('img');
  leftArrow.setAttribute('src', './assets/icons/chevron-left-solid.svg');
  leftArrowBtn.appendChild(leftArrow);
  contentContainer.appendChild(leftArrowBtn);

  const rightArrowBtn = document.createElement('button');
  rightArrowBtn.classList.add('right-btn');
  rightArrowBtn.setAttribute('aria-label', 'Next image');

  const rightArrow = document.createElement('img');
  rightArrow.setAttribute('src', './assets/icons/chevron-right-solid.svg');
  rightArrowBtn.appendChild(rightArrow);
  contentContainer.appendChild(rightArrowBtn);

  // Configuration de la navigation
  setupNavigation(
    () => {
      // Action pour la flèche gauche : afficher le média précédent
      const newIndex = (index - 1 + medias.length) % medias.length;
      displayLightbox(newIndex, medias, photographerName);
    },
    () => {
      // Action pour la flèche droite : afficher le média suivant
      const newIndex = (index + 1) % medias.length;
      displayLightbox(newIndex, medias, photographerName);
    },
  );

  // Navigation avec les touches fléchées du clavier
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      // Assurez-vous que ces variables sont accessibles
      const newIndex = (index - 1 + medias.length) % medias.length;
      displayLightbox(newIndex, medias, photographerName);
    } else if (event.key === 'ArrowRight') {
      // Assurez-vous que ces variables sont accessibles
      const newIndex = (index + 1) % medias.length;
      displayLightbox(newIndex, medias, photographerName);
    }
  });

  modal.style.display = 'block'; // Affiche la lightbox
  modal.focus(); // Donne le focus à la lightbox pour la navigation clavier
}

export default displayLightbox;

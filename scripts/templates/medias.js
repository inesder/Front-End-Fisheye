// Importation de la MediaFactory et de la fonction pour afficher la lightbox
import MediaFactory from '../factories/photographer.js';
import displayLightbox from '../utils/lightbox.js';

// Fonction pour créer un modèle de carte média
export function mediasTemplate(data, name, index, medias) {
  const { title, likes } = data; // données nécessaire du média

  const media = MediaFactory.create(data, name); //  MediaFactory pour créer le média

  // Fonction pour générer la carte du média
  function getMediaCard() {
    // Création de l'article pour le média
    const mediaCard = document.createElement('article');
    mediaCard.classList.add('media-card');

    // Lien pour ouvrir la lightbox
    const imgLink = document.createElement('a');
    imgLink.setAttribute('href', '#');
    imgLink.setAttribute('aria-label', title);
    // Gestionnaire d'évènement pour ouvrir la lightbox
    imgLink.addEventListener('click', (event) => {
      event.preventDefault();
      displayLightbox(index, medias, name); // Appelle displayLightbox avec les données du média
    });

    // Ajout du média généré par la MediaFactory
    const mediaContent = media.render();
    imgLink.appendChild(mediaContent);

    mediaCard.appendChild(imgLink);

    // Titre du média
    const mediaTitle = document.createElement('p');
    mediaTitle.textContent = title;
    mediaTitle.classList.add('gallery-title');

    // Likes du média
    const mediaLikes = document.createElement('p');
    mediaLikes.textContent = likes;
    mediaLikes.classList.add('gallery-likes');

    const likeButton = document.createElement('button');
    likeButton.setAttribute('aria-label', `Like ${title}`);
    likeButton.classList.add('like-button');
    likeButton.innerHTML = '<img src="assets/icons/heart-solid.svg" alt="Icône de cœur">';
    // Met à jour le total des likes affiché dans l'insert
    function updateTotalLikes(add) {
      const totalLikesElement = document.getElementById('totalLikesElement');
      if (totalLikesElement) {
        let currentTotalLikes = parseInt(totalLikesElement.textContent, 10);
        currentTotalLikes += add ? 1 : -1;
        totalLikesElement.textContent = `${currentTotalLikes}`;
      }
    }
    // Gestion du clic sur l'icône de like, mise à jour des likes
    likeButton.addEventListener('click', () => {
      // Inverse l'état de "like"
      data.isLiked = !data.isLiked;

      // Met à jour le nombre de likes
      if (data.isLiked) {
        data.likes += 1;
        updateTotalLikes(true); // Ajoute 1 au total des likes
      } else {
        data.likes -= 1;
        updateTotalLikes(false); // Retire 1 du total des likes
      }

      // Met à jour  le texte des likes
      mediaLikes.textContent = data.likes;
      // Applique l'effet de grossissement
      likeButton.classList.add('clicked');

      // Supprime l'effet après 200ms
      setTimeout(() => {
        likeButton.classList.remove('clicked');
      }, 200);
    });

    // Conteneur pour le titre et les likes
    const mediaInformations = document.createElement('div');
    mediaInformations.classList.add('media-informations');
    mediaInformations.appendChild(mediaTitle);
    mediaInformations.appendChild(mediaLikes);
    mediaInformations.appendChild(likeButton);

    mediaCard.appendChild(mediaInformations);

    return (mediaCard);
  }

  return { getMediaCard }; // Retourne l'objet avec la fonction pour obtenir la carte média
}
export default mediasTemplate;

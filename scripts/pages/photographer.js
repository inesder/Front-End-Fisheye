import getPhotographers from '../api/api.js'; // Importe la fonction pour récupérer les données des photographes
import mediasTemplate from '../templates/medias.js'; //  templates HTML pour les médias des photographes.
import sortMediasTemplate from '../templates/sortMedias.js'; // templates HTML pour le tri des médias
import insertTemplate from '../templates/insert.js';
import headerTemplate from '../templates/header.js';

// Fonction  pour afficher les données du photographe dans l'en-tête
function displayPhotographers(photographer) {
  // Crée modèle pour l'en-tête du photographe
  const photographerModel = headerTemplate(photographer);
  photographerModel.getUserHeader(); // Affiche l'en-tête du photographe sur la page
}

// Fonction pour afficher les médias d'un photographe
function displayMedia(medias, name) {
  const mediaSection = document.querySelector('.media-content'); // Sélectionne la section des médias sur la page
  mediaSection.innerHTML = ''; // Efface le contenu actuel de la section des médias

  // Pour chaque média, crée une carte et l'ajoute à la section des médias
  medias.forEach((media, index) => {
    // Utilise le template de médias pour créer un model pour chaque média
    const mediaModel = mediasTemplate(media, name, index, medias);
    // Récupère la carte du média à partir du modèle
    const mediaCard = mediaModel.getMediaCard();
    mediaSection.appendChild(mediaCard); // Ajoute la carte du média à la section des médias
  });
}

// Fonction pour afficher l'insert avec du photographe
function displayInsert(photographer) {
  const insertModel = insertTemplate(photographer);// Crée un modèle pour l'insert
  insertModel.getInsert(); // Affiche l'insert sur la page
}

// Fonction pour afficher et trier les médias du photographe
function displaySortMedias(medias, name, displayCallback) {
  // Crée un modèle pour le tri des médias
  const sortMediasModel = sortMediasTemplate(medias, name, displayCallback);
  sortMediasModel.getSortMedias(); // Affiche les options de tri sur la page
}

// Fonction pour la page du photographe
async function init() {
  // Récupère l'ID du photographe depuis l'URL
  const params = new URL(document.location).searchParams;
  const photographerId = parseInt(params.get('id'), 10);

  const data = await getPhotographers(); // Récupère les données des photographes
  // Trouve le photographe correspondant à l'ID
  const photographer = data.photographers.find((p) => p.id === photographerId);

  // Si le photographe est trouvé, affiche ses données et médias
  if (photographer) {
    displayPhotographers(photographer);
    // Filtrer et trier les médias du photographe par popularité
    const medias = data.media
      .filter((m) => m.photographerId === photographerId)
      .sort((a, b) => b.likes - a.likes);
    // Calculer le total des likes pour tous les médias
    const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);

    // Affiche les informations additionnelles et les médias
    displayInsert({ price: photographer.price, totalLikes });
    displayMedia(medias, photographer.name);
    displaySortMedias(medias, photographer.name, displayMedia);
  } else {
    /* eslint-disable no-console */
    console.error('Photographe non trouvé.'); // Si aucun photographe n'est trouvé, affiche une erreur dans la console
    /* eslint-enable no-console */
  }
}

init(); // Exécute la fonction init lors du chargement du fichier

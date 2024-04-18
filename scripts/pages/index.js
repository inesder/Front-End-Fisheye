import getPhotographers from '../api/api.js'; // Importation de la fonction pour récupérer les données des photographes
import photographerTemplate from '../templates/photographer.js';

// Fonction pour afficher les données des photographes sur la page
function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  // Pour chaque photographe, crée une carte et l'ajoute à la section
  photographers.forEach((photographer) => {
    // Crée un modèle pour chaque photographe basé sur les données reçues
    const photographerModel = photographerTemplate(photographer);
    // Récupère le DOM de la carte utilisateur à partir du modèle
    const userCardDOM = photographerModel.getUserCardDOM();
    // Ajoute la carte du photographe à la section des photographes dans le HTML
    photographersSection.appendChild(userCardDOM);
    // console.log(photographerModel.id);
  });
}

// Fonction asynchrone pour récupérer les données des photographes et les afficher
async function init() {
  // Appelle getPhotographers pour récupérer les données des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers); // Appelle displayData pour afficher les photographes sur la page
}

init(); // Exécute la fonction init lors du chargement du fichier

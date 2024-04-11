import { getPhotographers } from '../api/api.js'; // Importation de la fonction pour récupérer les données des photographes

    // Fonction asynchrone pour afficher les données des photographes sur la page
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section")

        // Pour chaque photographe, crée une carte et l'ajoute à la section
        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer); // Crée un modèle pour chaque photographe basé sur les données reçues
            const userCardDOM = photographerModel.getUserCardDOM(); // Récupère le DOM de la carte utilisateur à partir du modèle
            photographersSection.appendChild(userCardDOM); // Ajoute la carte du photographe à la section des photographes dans le HTML
            console.log(photographerModel.id);
        });
    }

    // Fonction asynchrone pour récupérer les données des photographes et les afficher
    async function init() {
        const { photographers } = await getPhotographers(); // Appelle getPhotographers pour récupérer les données des photographes
        displayData(photographers); // Appelle displayData pour afficher les photographes sur la page
    }
    
    init(); // Exécute la fonction init lors du chargement du fichier
    

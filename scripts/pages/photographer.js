import { getPhotographers } from '../api/api.js'; // Importe la fonction pour récupérer les données des photographes
import { mediasTemplate } from '../templates/medias.js'; //  templates HTML pour les médias des photographes.



// Fonction asynchrone pour afficher les données du photographe dans l'en-tête
async function displayData(photographer) {
    const photographerModel = headerTemplate(photographer); // Crée un modèle pour l'en-tête du photographe
    photographerModel.getUserHeader(); // Affiche l'en-tête du photographe sur la page
}

// Fonction asynchrone pour afficher les médias d'un photographe
async function displayMedia(medias, name){
    const mediaSection = document.querySelector(".media-content"); // Sélectionne la section des médias sur la page
    mediaSection.innerHTML = ''; // Efface le contenu actuel de la section des médias

    // Pour chaque média, crée une carte et l'ajoute à la section des médias
    medias.forEach((media, index) =>{
        const mediaModel = mediasTemplate(media, name, index, medias);// Utilise le template de médias pour créer un model pour chaque média
        const mediaCard = mediaModel.getMediaCard(); // Récupère la carte du média à partir du modèle
        mediaSection.appendChild(mediaCard); // Ajoute la carte du média à la section des médias dans le HTML
    });
}


// Fonction asynchrone pour afficher l'insert avec du photographe
async function displayInsert(photographer) {
    
    const insertModel = insertTemplate(photographer);// Crée un modèle pour l'insert
    insertModel.getInsert(); // Affiche l'insert sur la page
}

// Fonction asynchrone pour afficher et trier les médias du photographe
async function displaySortMedias(medias, name, displayCallback) {
    const sortMediasModel = sortMediasTemplate(medias, name, displayCallback);// Crée un modèle pour le tri des médias
    sortMediasModel.getSortMedias(); // Affiche les options de tri sur la page
}

// Fonction pour la page du photographe
async function init() {
    // Récupère l'ID du photographe depuis l'URL
    let params = new URL(document.location).searchParams; 
    let photographerId = parseInt(params.get("id")); 
    
    
    const data = await getPhotographers(); // Récupère les données des photographes
    
    const photographer = data.photographers.find(p => p.id === photographerId); // Trouve le photographe correspondant à l'ID

    // Si le photographe est trouvé, affiche ses données et médias
    if (photographer) {
        displayData(photographer); 
        
        const medias = data.media.filter(m => m.photographerId === photographerId).sort((a, b) => b.likes - a.likes); // Filtrer et trier les médias du photographe par popularité
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0); // Calculer le total des likes pour tous les médias

        // Affiche les informations additionnelles et les médias
        displayInsert({ price: photographer.price, totalLikes: totalLikes }); 
        displayMedia(medias, photographer.name); 
        displaySortMedias(medias, photographer.name, displayMedia); 
    } else {
        console.error("Photographe non trouvé."); // Si aucun photographe n'est trouvé, affiche une erreur dans la console
    }
}

init(); // Exécute la fonction init lors du chargement du fichier

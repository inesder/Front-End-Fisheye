import { getPhotographers } from '../api/api.js';
import { mediasTemplate } from '../templates/medias.js';
 



    async function displayData(photographer) {

            const photographerModel = headerTemplate(photographer);
            photographerModel.getUserHeader();
       
    }

    async function displayMedia(medias, name){
        const mediaSection = document.querySelector(".media-content");
        mediaSection.innerHTML = ''; // Vide la section

        medias.forEach((media, index) =>{
            const mediaModel = mediasTemplate(media, name, index, medias);
            const mediaCard = mediaModel.getMediaCard();
            mediaSection.appendChild(mediaCard);

        });
        
    }

    async function displayInsert(photographer, medias) {
        // Utilisez insertTemplate et passez-lui les données nécessaires
        const insertModel = insertTemplate(photographer);
        insertModel.getInsert();
    }

    async function displaySortMedias(medias, name, displayCallback) {
        // Utilisez insertTemplate et passez-lui les données nécessaires
        const sortMediasModel = sortMediasTemplate(medias, name, displayCallback);
        sortMediasModel.getSortMedias();
    }



async function init() {
    let params = new URL(document.location).searchParams;
    let photographerId = parseInt(params.get("id")); 
    
    const data = await getPhotographers(); // retourne à la fois les photographes et les médias
    
    const photographer = data.photographers.find(p => p.id === photographerId);

    if (photographer) {
        displayData(photographer); // Affiche les infos du photographe spécifié
        // Filtre les médias pour ce photographe spécifique
        const medias = data.media.filter(m => m.photographerId === photographerId);
        // Tri par popularité avant d'afficher
        medias.sort((a, b) => b.likes - a.likes);
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        displayInsert({ price: photographer.price, totalLikes: totalLikes }); // Ajouté pour afficher l'encart
        displayMedia(medias, photographer.name); // Ici, medias est un tableau
        displaySortMedias(medias, photographer.name, displayMedia);
        

    } else {
        console.error("Photographe non trouvé.");
    }
}
    

    init();
import { getPhotographers } from '../api/api.js';
import { mediasTemplate } from '../templates/medias.js';


    async function displayData(photographer) {

            const photographerModel = headerTemplate(photographer);
            photographerModel.getUserHeader();
       
    }

    async function displayMedia(medias, name){
        const mediaSection = document.querySelector(".media-section");

        medias.forEach((media) =>{
            const mediaModel = mediasTemplate(media, name);
            const mediaCard = mediaModel.getMediaCard();
            mediaSection.appendChild(mediaCard);

        });
        
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
        
        displayMedia(medias, photographer.name); // Ici, medias est un tableau
    } else {
        console.error("Photographe non trouvé.");
    }
}
    

    init();
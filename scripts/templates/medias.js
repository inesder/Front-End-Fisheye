import { MediaFactory } from '../factories/photographer.js';

export function mediasTemplate(data, name) {
    const { photographerId, title, image, likes, date, price } = data;
    
    
    if (data.image) {
        data.image = `assets/medias/${name}/${data.image}`;
    } else if (data.video) {
        data.video = `assets/medias/${name}/${data.video}`;
    }

     // Utilisez la MediaFactory pour créer le média
     const media = new MediaFactory(data);


    function getMediaCard() {

        const mediaCard = document.createElement("article");
        mediaCard.classList.add("media-card");

        const mediaContent = media.render();


        const mediaTitle = document.createElement("p");
        mediaTitle.textContent = title;
        mediaTitle.classList.add("gallery-title")

        const mediaLikes = document.createElement("p");
        mediaLikes.textContent = likes;
        mediaLikes.classList.add("gallery-likes");

        const mediaInformations = document.createElement("div");
        mediaInformations.classList.add("media-informations");
        mediaInformations.appendChild(mediaTitle);
        mediaInformations.appendChild(mediaLikes);

        mediaCard.appendChild(mediaContent);
        mediaCard.appendChild(mediaInformations);

        // grid
        const numberOfColumns = 3;

        const gridItems = document.querySelectorAll('.media-section > .media-card');

        gridItems.forEach((item, index) => {
            const column = (index % numberOfColumns) + 1;
            if (column === 2) { // Pour la deuxième colonne
                item.style.justifySelf = 'center';
            } else if (column === 3) { // Pour la troisième colonne
                item.style.justifySelf = 'end';
            }
        });

        return (mediaCard);
    }
    return { getMediaCard };
}
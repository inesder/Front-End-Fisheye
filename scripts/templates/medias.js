import { MediaFactory } from '../factories/photographer.js';
import { displayLightbox } from '../utils/lightbox.js';


export function mediasTemplate(data, name, index, medias) {
    const { photographerId, title, image, likes, date, price } = data;

    //  MediaFactory pour créer le média
    const media = new MediaFactory(data, name);

    function getMediaCard() {

        const mediaCard = document.createElement("article");
        mediaCard.classList.add("media-card");

        const imgLink = document.createElement("a");
        imgLink.setAttribute('href', '#');
        imgLink.setAttribute('aria-label', title);

        imgLink.addEventListener('click', function (event) {
            event.preventDefault();
            displayLightbox(index, medias, name); // Appelle displayLightbox avec les données du média
        });

        const mediaContent = media.render();
        imgLink.appendChild(mediaContent);

        mediaCard.appendChild(imgLink);

        const mediaTitle = document.createElement("p");
        mediaTitle.textContent = title;
        mediaTitle.classList.add("gallery-title")

        const mediaLikes = document.createElement("p");
        mediaLikes.textContent = likes;
        mediaLikes.classList.add("gallery-likes");

        const likeIcon = document.createElement("img");
        likeIcon.setAttribute('src', `assets/icons/heart-solid.svg`);
        // Met à jour le total des likes affiché dans l'insert
        function updateTotalLikes(add) {
            const totalLikesElement = document.getElementById('totalLikesElement');
            if (totalLikesElement) {
                let currentTotalLikes = parseInt(totalLikesElement.textContent);
                currentTotalLikes += add ? 1 : -1;
                totalLikesElement.textContent = `${currentTotalLikes}`;
            }
        }
        likeIcon.addEventListener('click', function () {
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
            likeIcon.classList.add('clicked');

            // Supprime l'effet après 200ms
            setTimeout(() => {
                likeIcon.classList.remove('clicked');
            }, 200);
        });


        const mediaInformations = document.createElement("div");
        mediaInformations.classList.add("media-informations");
        mediaInformations.appendChild(mediaTitle);
        mediaInformations.appendChild(mediaLikes);
        mediaInformations.appendChild(likeIcon);

        mediaCard.appendChild(mediaInformations);
        
        return (mediaCard);
    }

    return { getMediaCard };
}


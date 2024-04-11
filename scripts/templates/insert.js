// Fonction pour créer un modèle d'insertion affichant le nombre total de likes et le tarif journalier
function insertTemplate(data) {
    const { price, totalLikes } = data; // Données nécessaire pour l'insert 

    // Fonction pour générer et retourner l'élément d'insertion
    function getInsert() {
    
        const mainElement = document.getElementById("main");

        const insertElement = document.createElement('div');
        insertElement.classList.add("insert");

        // Total de likes du photographe
        const likesElement = document.createElement('p');
        likesElement.id = "totalLikesElement"
        likesElement.textContent = `${totalLikes}`;
        insertElement.appendChild(likesElement);

        // Icône coeur
        const likeIcon = document.createElement('img');
        likeIcon.setAttribute('src', 'assets/icons/heart-solid-black.svg')
        insertElement.appendChild(likeIcon);

        // Tarif journalier
        const priceElement = document.createElement('p');
        priceElement.textContent= price + "€/jour";
        priceElement.classList.add('insert-price');
        insertElement.appendChild(priceElement);

        mainElement.appendChild(insertElement);
        
        return (insertElement);
    }
    return { getInsert }  // Renvoie un objet contenant la fonction getInsert
}
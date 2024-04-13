// Fonction pour afficher le nombre total de likes et le tarif journalier
export function insertTemplate(data) {
  const { price, totalLikes } = data; // Données nécessaire pour l'insert

  // Fonction pour générer et retourner l'élément d'insertion
  function getInsert() {
    const mainElement = document.getElementById('main');

    const insertElement = document.createElement('div');
    insertElement.classList.add('insert');
    

    // Total de likes du photographe
    const likesElement = document.createElement('p');
    likesElement.id = 'totalLikesElement';
    likesElement.textContent = `${totalLikes}`;
    likesElement.setAttribute("tabindex","0");
    insertElement.appendChild(likesElement);
    

    // Icône coeur
    const likeIcon = document.createElement('img');
    likeIcon.setAttribute('src', 'assets/icons/heart-solid-black.svg');
    likeIcon.setAttribute('alt', 'likes');
    likeIcon.setAttribute('tabindex',"0");
    insertElement.appendChild(likeIcon);

    // Tarif journalier
    const priceElement = document.createElement('p');
    priceElement.textContent = `${price}€/jour`;
    priceElement.classList.add('insert-price');
    priceElement.setAttribute("tabindex","0");
    insertElement.appendChild(priceElement);

    mainElement.appendChild(insertElement);

    return (insertElement);
  }
  return { getInsert }; // Renvoie un objet contenant la fonction getInsert
}
export default insertTemplate;

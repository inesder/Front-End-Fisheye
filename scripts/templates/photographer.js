// Fonction pour créer un modèle de carte de photographe à partir de données fournies
export function photographerTemplate(data) {
  const {
    name, city, country, tagline, price, portrait,
  } = data; // extraire les données nécessaires du photographe

  const picture = `assets/photographers/${portrait}`; // Chemin vers l'image du photographe

  // Fonction pour générer le DOM de la carte du photographe
  function getUserCardDOM() {
    const article = document.createElement('article'); // Crée l'élément HTML de base pour la carte

    // Photo de profil du photographe
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', picture);

    // Nom du photographe
    const nameElement = document.createElement('h2');
    nameElement.textContent = name;

    // Conteneur pour image, nom
    const cardHeader = document.createElement('div');
    cardHeader.appendChild(imgElement);
    cardHeader.appendChild(nameElement);
    cardHeader.classList.add('card-header');
    cardHeader.setAttribute('aria-label', name);

    // Lien vers le profil du photographe
    const cardHeaderLink = document.createElement('a');
    cardHeaderLink.setAttribute('aria-label', name);
    cardHeaderLink.setAttribute('href', `photographer.html?id=${data.id}`);
    cardHeaderLink.appendChild(cardHeader);

    // localisation du photographe
    const locationElement = document.createElement('p');
    locationElement.textContent = `${city}, ${country}`;
    locationElement.classList.add('location');

    // Tarif du photographe
    const priceElement = document.createElement('p');
    priceElement.textContent = `${price}€/jour`;
    priceElement.classList.add('price');

    // Slogan du photographe
    const taglineElement = document.createElement('p');
    taglineElement.textContent = tagline;
    taglineElement.classList.add('tagline');

    // Conteneur pour localisation, slogan et tarif
    const cardContent = document.createElement('div');
    cardContent.appendChild(locationElement);
    cardContent.appendChild(taglineElement);
    cardContent.appendChild(priceElement);
    cardContent.classList.add('card-content');

    article.appendChild(cardHeaderLink);
    article.appendChild(cardContent);

    return (article);
  }
  // Retourne l'objet contenant la fonction pour obtenir le DOM de la card
  return { getUserCardDOM };
}

export default photographerTemplate;

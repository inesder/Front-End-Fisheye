// Fonction pour créer un modèle d'en-tête pour un photographe
export function headerTemplate(data) {
  const {
    name, city, country, tagline, portrait,
  } = data; // Données nécessaires du photographe

  const picture = `assets/photographers/${portrait}`; // Chemin vers l'image du photographe

  // Fonction pour générer l'en-tête du photographe sur la page
  function getUserHeader() {
    const photographerSection = document.querySelector('.photograph-header');

    // Photo de profil du photographe
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', picture);
    imgElement.setAttribute('alt', name);

    // Nom du photographe
    const nameElement = document.createElement('h1');
    nameElement.textContent = name;

    // Localisation du photographe
    const locationElement = document.createElement('p');
    locationElement.textContent = `${city}, ${country}`;
    locationElement.classList.add('location');

    // Slogan du photographe
    const taglineElement = document.createElement('p');
    taglineElement.textContent = tagline;
    taglineElement.classList.add('tagline');

    // Conteneur pour les informations du profil
    const cardContent = document.createElement('div');
    cardContent.appendChild(locationElement);
    cardContent.appendChild(taglineElement);
    cardContent.classList.add('card-content');

    const profile = document.createElement('div');
    profile.appendChild(nameElement);
    profile.appendChild(cardContent);
    profile.classList.add('profile');

    photographerSection.appendChild(profile);
    photographerSection.appendChild(imgElement);

    return (photographerSection);
  }
  return { getUserHeader }; // Retourne l'objet avec la fonction pour obtenir l'en-tête
}
export default headerTemplate;

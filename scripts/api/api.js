// Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
  try {
    // Récupération des données des photographes depuis le fichier JSON
    const response = await fetch('data/photographers.json');

    // Vérifie si la réponse est OK (status 200-299)
    if (!response.ok) {
      throw new Error('Erreur réseau: La réponse n\'est pas ok.');
    }

    // Extraction des données JSON de la réponse
    const photographersData = await response.json();
    /* eslint-disable no-console */
    console.log(photographersData);
    // et bien retourner le tableau photographers seulement une fois récupéré
    // Supposons que cette variable contient un objet avec une propriété photographers
    return photographersData;
  } catch (error) {
    // Gestion des erreurs (problème de réseau, fichier non trouvé, etc.)
    console.error('Erreur lors de la récupération des données:', error);
    /* eslint-enable no-console */
    throw error;
  }
}

export default getPhotographers;

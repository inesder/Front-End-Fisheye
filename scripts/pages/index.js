async function getPhotographers() {
    try {
        // Récupération des données des photographes depuis le fichier JSON
        const response = await fetch("data/photographers.json");
        
        // Vérifie si la réponse est OK (status 200-299)
        if (!response.ok) {
            throw new Error('Erreur réseau: La réponse n\'est pas ok.');
        }

        // Extraction des données JSON de la réponse
        const photographersData = await response.json();
        console.log(photographersData);
        
        // et bien retourner le tableau photographers seulement une fois récupéré
        return photographersData; // Supposons que cette variable contient un objet avec une propriété photographers
    } catch (error) {
        // Gestion des erreurs (problème de réseau, fichier non trouvé, etc.)
        console.error("Erreur lors de la récupération des données:", error);
    }
}

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section")

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            console.log(photographerModel.id);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    

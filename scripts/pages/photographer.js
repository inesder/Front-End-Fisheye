//Mettre le code JavaScript lié à la page photographer.html
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

        const photographerMain = document.getElementById("main");
        
        photographers.forEach((photographer) => {
            const photographerModel = headerTemplate(photographer);
            const userHeader = photographerModel.getUserHeader();
            photographerMain.appendChild(userHeader);
            console.log(photographerModel.id);
        });
    }

    async function init() {
        let params = new URL(document.location).searchParams;
        let photographerId = params.get("id"); // Récupère l'ID depuis l'URL
    
        const { photographers } = await getPhotographers();
        //Compare directement l'ID, JavaScript gère la conversion de type si nécessaire
        const photographer = photographers.find(p => p.id == photographerId);
    
        if (photographer) {
            displayData([photographer]); // Affiche les infos du photographe spécifié
        } else {
            console.error("Photographe non trouvé.");
        }
    }
    

    init();
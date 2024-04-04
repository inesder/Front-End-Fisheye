

function sortMediasTemplate(medias, name, displayCallback) {

    function getSortMedias() {
        const mediaSection = document.querySelector(".media-section");

        const sortContainer = document.createElement("div");

        const sortLabel = document.createElement("p");
        sortLabel.textContent=("Trier par ");

        const selectElement = document.createElement("select");
        const options = ["Popularité", "Date", "Titre"];
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.value = options[i];
            option.textContent = options[i];
            selectElement.appendChild(option); // Ajoute l'option au select
        }

        mediaSection.prepend(sortContainer);
        sortContainer.appendChild(sortLabel);
        sortContainer.appendChild(selectElement);

        selectElement.addEventListener('change', (event) => {
            const selectedOption = event.target.value;
            console.log("Médias avant le tri :", medias);
            sortMedias(selectedOption, medias, name, displayCallback);
        });
    }
    return { getSortMedias }
} 



function sortMedias(selectedOption, medias, name, displayCallback) {
    let sortedMedias;
    switch (selectedOption) {
        case "Popularité":
            sortedMedias = medias.sort((a, b) => b.likes - a.likes);
            break;
        case "Date":
            sortedMedias = medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case "Titre":
            sortedMedias = medias.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            sortedMedias = medias; // Pas de tri si l'option est inconnue
    }
    console.log("Médias après le tri :", sortedMedias);
    displayCallback(sortedMedias, name); // Assurez-vous que `displayMedia` est accessible


}

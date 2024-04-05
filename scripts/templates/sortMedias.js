function sortMediasTemplate(medias, name, displayCallback) {
    function getSortMedias() {
        const mediaSection = document.querySelector(".media-section");

        const sortContainer = document.createElement("div");
        sortContainer.classList.add("sort-container");

        // Libellé "Trier par"
        const sortLabel = document.createElement("p");
        sortLabel.textContent = "Trier par";
        sortLabel.id = "sort-label"; 
        sortContainer.appendChild(sortLabel);   

        
        // Option sélectionnée affichée à côté du libellé
        const selectedOptionContainer = document.createElement("div");
        selectedOptionContainer.classList.add('selected-container');

        const selectedOption = document.createElement("button");
        selectedOption.textContent = "Popularité"; // "Popularité" est l'option par défaut
        selectedOption.classList.add("selected-option");
        selectedOption.setAttribute("role", "button");
        selectedOption.setAttribute("aria-haspopup", "listbox");
        selectedOption.setAttribute("aria-expanded", "false");
        selectedOptionContainer.appendChild(selectedOption);
        sortContainer.appendChild(selectedOptionContainer);

        // Contenu du menu déroulant
        const dropdownContent = document.createElement("ul");
        dropdownContent.classList.add("dropdown-content");
        dropdownContent.setAttribute("role", "listbox");
        dropdownContent.setAttribute("aria-labelledby", "sort-label");

        //flèche menu déroulant
        const arrowDown = document.createElement("img");
        arrowDown.setAttribute('src', 'assets/icons/chevron-down-solid.svg');
        selectedOptionContainer.appendChild(arrowDown);
        arrowDown.classList.add('arrow-down');

        const arrowUp = document.createElement("img");
        arrowUp.setAttribute('src', 'assets/icons/chevron-up-solid.svg');
        selectedOptionContainer.appendChild(arrowUp);
        arrowUp.classList.add('arrow-up');

        // Met à jour le menu déroulant avec les options disponibles
        function updateDropdownOptions(currentSelection) {
            dropdownContent.innerHTML = ''; // Nettoie les options précédentes
            const options = ["Popularité", "Date", "Titre"].filter(option => option !== currentSelection);
            options.forEach((option, index) => {
                const listItem = document.createElement("li");
                listItem.id = `option-${option.replace(/\s+/g, '-')}`;
                listItem.setAttribute("role", "option");
                listItem.setAttribute("aria-selected", "false");
                if(index === 0) { // Le premier élément comme activedescendant par défaut
                    dropdownContent.setAttribute("aria-activedescendant", listItem.id);
                }
                const link = document.createElement("a");
                link.textContent = option;
                link.href = "#";
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    selectedOption.textContent = option; // Mise à jour de l'option visible
                    sortMedias(option, medias, name, displayCallback);
                    dropdownContent.classList.remove("show"); // Ferme le menu après sélection
                    selectedOption.setAttribute("aria-expanded", "false");
                    dropdownContent.setAttribute("aria-activedescendant", listItem.id); // Met à jour l'activedescendant
            listItem.setAttribute("aria-selected", "true"); // Marque l'option comme sélectionnée
                });
                listItem.appendChild(link);
                dropdownContent.appendChild(listItem);
            });
        }

        // Initialise le menu déroulant avec "Popularité" comme l'option non incluse initialement
        updateDropdownOptions("Popularité");

        // Afficher/Masquer le menu déroulant
        selectedOption.addEventListener('click', () => {
            const isExpanded = selectedOption.getAttribute("aria-expanded") === "true";
            selectedOption.setAttribute("aria-expanded", !isExpanded);
            updateDropdownOptions(selectedOption.textContent); // Met à jour les options à chaque ouverture
            dropdownContent.classList.toggle("show");
             // Bascule entre les icônes de flèche
            if (dropdownContent.classList.contains("show")) {
             // Menu ouvert : affiche arrowUp, cache arrowDown
            arrowUp.style.display = "block";
            arrowDown.style.display = "none";
            } else {
            // Menu fermé : cache arrowUp, affiche arrowDown
            arrowUp.style.display = "none";
            arrowDown.style.display = "block";
        }
        });

        // Ferme le menu si l'utilisateur clique en dehors de celui-ci
        window.addEventListener('click', (event) => {
            if (!sortContainer.contains(event.target) && !selectedOption.contains(event.target)) {
                dropdownContent.classList.remove("show");
                selectedOption.setAttribute("aria-expanded", "false");
                // Réinitialise les icônes à leur état par défaut
                arrowUp.style.display = "none";
                 arrowDown.style.display = "block";
            }
        });

        sortContainer.appendChild(dropdownContent);
        mediaSection.prepend(sortContainer);
    }

    return { getSortMedias };
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

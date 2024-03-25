function headerTemplate(data) {
    const { name, city, country, tagline, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserHeader() {
        const photographerSection = document.querySelector(".photograph-header");

        const imgElement = document.createElement( 'img' );
        imgElement.setAttribute("src", picture);
        imgElement.setAttribute("alt", name )

        const nameElement = document.createElement( 'h1' );
        nameElement.textContent = name;

        const locationElement = document.createElement('p');
        locationElement.textContent = city + ", " + country;
        locationElement.classList.add("location");

        const taglineElement = document.createElement('p');
        taglineElement.textContent = tagline;
        taglineElement.classList.add("tagline");

        const cardContent = document.createElement('div');
        cardContent.appendChild(locationElement);
        cardContent.appendChild(taglineElement);
        cardContent.classList.add("card-content");

        const profile = document.createElement('div');
        profile.appendChild(nameElement);
        profile.appendChild(cardContent);
        profile.classList.add("profile");

        photographerSection.appendChild(profile);
        photographerSection.appendChild(imgElement);
        
        return (photographerSection);
        
    }
    return { getUserHeader }
}
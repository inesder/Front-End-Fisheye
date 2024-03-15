function photographerTemplate(data) {
    const { name, city, country, tagline, price, id, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const imgElement = document.createElement( 'img' );
        imgElement.setAttribute("src", picture)

        const nameElement = document.createElement( 'h2' );
        nameElement.textContent = name;

        const cardHeader = document.createElement( 'div' );
        cardHeader.appendChild(imgElement);
        cardHeader.appendChild(nameElement);
        cardHeader.classList.add("card-header");

        const cardHeaderLink = document.createElement('a');
        cardHeaderLink.setAttribute("aria-label", name);
        cardHeaderLink.setAttribute("href", `photographer.html?id=${data.id}`)
        cardHeaderLink.appendChild(cardHeader);

        const locationElement = document.createElement('p');
        locationElement.textContent = city + ", " + country;
        locationElement.classList.add("location");

        const priceElement = document.createElement('p');
        priceElement.textContent = price + "€/jour";
        priceElement.classList.add("price");

        const taglineElement = document.createElement('p');
        taglineElement.textContent = tagline;
        taglineElement.classList.add("tagline");

        const cardContent = document.createElement('div');
        cardContent.appendChild(locationElement);
        cardContent.appendChild(taglineElement);
        cardContent.appendChild(priceElement);
        cardContent.classList.add("card-content");


        article.appendChild(cardHeaderLink);
        article.appendChild(cardContent);

       /* cardHeaderLink.onclick = function() {
            console.log(data.id);
          };*/

        return (article);
    }
    return { getUserCardDOM }
}



  




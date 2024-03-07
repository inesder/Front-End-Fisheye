function photographerTemplate(data) {
    const { name, city, country, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const imgElement = document.createElement( 'img' );
        imgElement.setAttribute("src", picture)
        const nameElement = document.createElement( 'h2' );
        nameElement.textContent = name;
        const cityElement = document.createElement('p');
        cityElement.textContent = city;
        const countryElement = document.createElement('p');
        countryElement.textContent = country;
        const priceElement = document.createElement('p');
        priceElement.textContent = price;
        article.appendChild(imgElement);
        article.appendChild(nameElement);
        article.appendChild(cityElement);
        article.appendChild(countryElement);
        article.appendChild(priceElement);
        return (article);
    }
    return { name, city, country, price, picture, getUserCardDOM }
}
function insertTemplate(data) {
    const { price, totalLikes } = data;

    function getInsert() {
    
        const mainElement = document.getElementById("main");

        const insertElement = document.createElement('div');
        insertElement.classList.add("insert");

        const likesElement = document.createElement('p');
        likesElement.id = "totalLikesElement"
        likesElement.textContent = `${totalLikes}`;
        insertElement.appendChild(likesElement);

        const likeIcon = document.createElement('img');
        likeIcon.setAttribute('src', 'assets/icons/heart-solid-black.svg')
        insertElement.appendChild(likeIcon);

        const priceElement = document.createElement('p');
        priceElement.textContent= price + "€/jour";
        priceElement.classList.add('insert-price');
        insertElement.appendChild(priceElement);

        mainElement.appendChild(insertElement);
        
        return (insertElement);
    }
    return { getInsert }
}
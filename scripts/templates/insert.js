function insertTemplate(data) {
    const { price, totalLikes } = data;

    function getInsert() {
    
        const mainElement = document.getElementById("main");

        const insertElement = document.createElement('div');
        insertElement.classList.add("insert");

        const priceElement = document.createElement('p');
        priceElement.textContent= price + "€/jour";
        insertElement.appendChild(priceElement);

        const likesElement = document.createElement('p');
        likesElement.textContent = `${totalLikes}`;
        insertElement.appendChild(likesElement);

        mainElement.appendChild(insertElement);
        
        return (insertElement);
    }
    return { getInsert }
}
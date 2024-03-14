export class Image{
    constructor(dataMedia){
        this.photographerId = dataMedia.photographerId;
        this.title = dataMedia.title;
        this.likes = dataMedia.likes;
        this.date = dataMedia.date;
        this.price = dataMedia.price;
        this.url = dataMedia.image;
    }

    render() {
        const imgElement = document.createElement("img");
        imgElement.src = this.url;
        imgElement.alt = this.title;
        imgElement.className = "gallery-img";
        return imgElement;
    }
}
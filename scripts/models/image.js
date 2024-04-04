export class Image{
    constructor(dataMedia, photographerName){
        this.photographerId = dataMedia.photographerId;
        this.title = dataMedia.title;
        this.likes = dataMedia.likes;
        this.date = dataMedia.date;
        this.price = dataMedia.price;
        this.url = this.createMediaPath(dataMedia, photographerName);
    }
    createMediaPath(dataMedia, photographerName) {
        const mediaPath = dataMedia.image || dataMedia.video;
        if (!mediaPath.startsWith('assets/medias/')) {
            return `assets/medias/${photographerName}/${mediaPath}`;
        }
        return mediaPath;
    }

    render() {
        const imgElement = document.createElement("img");
        imgElement.src = this.url;
        imgElement.alt = this.title;
        imgElement.className = "gallery-img";
        return imgElement;
        
    }
}
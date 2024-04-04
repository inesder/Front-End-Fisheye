export class Video{
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
        const videoElement = document.createElement("video");
        videoElement.src = this.url;
        videoElement.controls = true;
        videoElement.className= "gallery-video";
        return videoElement;
    }
}
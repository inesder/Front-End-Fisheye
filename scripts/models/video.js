export class Video{
    constructor(dataMedia){
        this.photographerId = dataMedia.photographerId;
        this.title = dataMedia.title;
        this.likes = dataMedia.likes;
        this.date = dataMedia.date;
        this.price = dataMedia.price;
        this.url = dataMedia.video;
    }

    render() {
        const videoElement = document.createElement("video");
        videoElement.src = this.url;
        videoElement.controls = true;
        videoElement.className= "gallery-video";
        return videoElement;
    }
}
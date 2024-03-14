import { Image } from "../models/image.js"
import { Video } from "../models/video.js";

export class MediaFactory {
    constructor(mediaData){
       if (mediaData.image !== undefined) {
        return new Image(mediaData);
    } else if (mediaData.video !== undefined) {
        return new Video(mediaData);
    } 
    }    
}

// Importation des classes Image et Video 
import { Image } from "../models/image.js"
import { Video } from "../models/video.js";

// Définition de la classe MediaFactory

export class MediaFactory {
    // Le constructeur prend en argument les données média et le nom du photographe
    constructor(mediaData, photographerName){
        // Si mediaData contient une propriété "image", crée et retourne une instance de Image
       if (mediaData.image !== undefined) {
        return new Image(mediaData, photographerName);
        // Si mediaData contient une propriété "video", crée et retourne une instance de Video
    } else if (mediaData.video !== undefined) {
        return new Video(mediaData, photographerName);
    } 
    }    
}

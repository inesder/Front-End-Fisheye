// Importation des classes Image et Video
import Image from '../models/image.js';
import Video from '../models/video.js';

// Définition de la classe MediaFactory
export default class MediaFactory {
  static create(mediaData, photographerName) {
    if (mediaData.image !== undefined) {
      return new Image(mediaData, photographerName);
    }
    if (mediaData.video !== undefined) {
      return new Video(mediaData, photographerName);
    }
    // Ajoutez un retour explicite de 'undefined' ou null si aucune condition n'est remplie
    return undefined;
  }
}

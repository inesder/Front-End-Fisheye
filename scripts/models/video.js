// Définition de la classe Video pour représenter une vidéo média
export default class Video {
  // Constructeur de la classe Video
  constructor(dataMedia, photographerName) {
    // Initialisation des propriétés de l'objet avec les données fournies
    this.photographerId = dataMedia.photographerId;
    this.title = dataMedia.title;
    this.likes = dataMedia.likes;
    this.date = dataMedia.date;
    this.price = dataMedia.price;
    // Génère le chemin complet du fichier média
    this.url = Video.createMediaPath(dataMedia, photographerName);
  }

  // Méthode pour créer le chemin du fichier média
  static createMediaPath(dataMedia, photographerName) {
    const mediaPath = dataMedia.image || dataMedia.video;// Ici, on s'attend à traiter une vidéo
    // Assure que le chemin commence par le dossier "assets/medias/"
    if (!mediaPath.startsWith('assets/medias/')) {
      return `assets/medias/${photographerName}/${mediaPath}`;
    }
    return mediaPath;
  }

  // Méthode pour créer et retourner un élément <video> représentant la vidéo
  render() {
    const videoElement = document.createElement('video');
    videoElement.src = this.url;
    videoElement.controls = true;
    videoElement.className = 'gallery-video';
    return videoElement;
  }
}

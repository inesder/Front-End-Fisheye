// Définition de la classe Image pour représenter une image média
export class Image{
    constructor(dataMedia, photographerName){
        // Initialisation des propriétés de l'objet avec les données 
        this.photographerId = dataMedia.photographerId;
        this.title = dataMedia.title;
        this.likes = dataMedia.likes;
        this.date = dataMedia.date;
        this.price = dataMedia.price;
        // Génère le chemin complet du fichier média
        this.url = this.createMediaPath(dataMedia, photographerName);
    }
    // Méthode pour créer le chemin du fichier média
    createMediaPath(dataMedia, photographerName) {
        const mediaPath = dataMedia.image || dataMedia.video; // Ici, on s'attend à traiter une image
         // Assure que le chemin commence par le dossier "assets/medias/"
        if (!mediaPath.startsWith('assets/medias/')) {
            return `assets/medias/${photographerName}/${mediaPath}`;
        }
        return mediaPath;
    }   
    // Méthode pour créer et retourner un élément <img> représentant l'image

    render() {
        const imgElement = document.createElement("img");
        imgElement.src = this.url;
        imgElement.alt = this.title;
        imgElement.className = "gallery-img";
        return imgElement;
        
    }
}
import Config from "../config/config";
import { Client, Databases, Storage, ID } from "appwrite";

export class GalleryService{
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client
            .setEndpoint(Config.appwrite_endpoint)
            .setProject(Config.appwrite_project_id);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createGalleryPhoto({ title, image }: { title: string; image: string }) {
        try {
            return await this.databases.createDocument(
                Config.appwrite_database_id,
                Config.appwrite_gallery_collection_id,
                ID.unique(),
                {
                    title,
                    image
                }
            );
        } catch (error) {
            console.error("createGalleryPhoto:", error);
        }
    }

    async deleteGalleryPhoto(id: string) {
        try{
            await this.databases.deleteDocument(
                Config.appwrite_database_id,
                Config.appwrite_gallery_collection_id,
                id
            );
            return true
        } catch (error) {
            console.error("deleteGalleryPhoto:", error);
            return false
        }
        
    }
    
    async getGalleryPhotos() {
        try{
            await this.databases.listDocuments(
                Config.appwrite_database_id,
                Config.appwrite_gallery_collection_id
            );
            return true
        } catch (error) {
            console.error("getGalleryPhotos:", error);
            return false
        }
        
    }

    async getGalleryPhotoById(id: string) {
        try{
            await this.databases.getDocument(
                Config.appwrite_database_id,
                Config.appwrite_gallery_collection_id,
                id
            );
            return true
        } catch (error) {
            console.error("getGalleryPhotoById:", error);
            return false
        }
        
    }

}

const galleryService = new GalleryService()

export default galleryService
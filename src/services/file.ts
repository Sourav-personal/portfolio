import Config from "../config/config";
import { Client, Storage, ID } from "appwrite";


export class StorageService{
    client = new Client();
    storage;
    constructor(){
        this.client
            .setEndpoint(Config.appwrite_endpoint)
            .setProject(Config.appwrite_project_id);
        this.storage = new Storage(this.client);
    }

    async createPhoto(file : File) {
        try {
            return await this.storage.createFile(
                Config.appwrite_bucket_id,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("createPhoto:", error);
        }
    }
    async deletePhoto(id : string) {
        try {
            return await this.storage.deleteFile(
                Config.appwrite_bucket_id,
                id
            );
        } catch (error) {
            console.error("deletePhoto:", error);
        }
    }

    getPhotoPreview(id : string){
        try {
            return this.storage.getFilePreview(
                Config.appwrite_bucket_id,
                id
            );
        } catch (error) {
            console.error("getPhotoPreview:", error);
        }
    }

}

const storageService = new StorageService()

export default storageService
import Config from "../config/config";
import { Client, Account } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(Config.appwrite_endpoint)
            .setProject(Config.appwrite_project_id);
        this.account = new Account(this.client);
    }

    async login({ email, password }: { email: string; password: string }) {
        try{
            return this.account.createEmailPasswordSession(email, password);
        }catch (error) {
            console.error("login:", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("getCurrentUser:", error);
        }
        return null
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.error("logout:", error);
        }
        return null
    }
}

const authService = new AuthService();

export default authService
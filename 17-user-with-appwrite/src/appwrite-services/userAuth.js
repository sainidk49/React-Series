import server from './config/serverConfig.js'
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(server.url) // Your API Endpoint
            .setProject(server.projectId);
        this.account = new Account(this.client)
    }

    async createAccountApi({emial, password, name}){
        try {
            const userAccount =  await this.account.create(ID.unique(), emial, password, name)
            if(userAccount){
                // redirect login
                return this.loginApi({emial, password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async loginApi({emial, password}){
        try {
           return await this.account.createEmailPasswordSession(emial, password)
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async getCurrentUserApi(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
            throw error
        }
        return null
    }

    async logoutApi(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

const authService = new AuthService()

export default authService
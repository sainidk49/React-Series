import server from '../config/serverConfig.js'
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class DatabasesServices {
    client = new Client();
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(server.url) // Your API Endpoint
            .setProject(server.projectId);
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPostApi({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                server.databaseId, // databaseId
                server.collectId, // collectionId
                slug, // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }, // data

            )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async updatePostApi(slug, { title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                server.databaseId, // databaseId
                server.collectId, // collectionId
                slug, // documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }, // data

            )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async deletePostApi(slug) {
        try {
            return await this.databases.deleteDocument(
                server.databaseId, // databaseId
                server.collectId, // collectionId
                slug, // documentId
            )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async getPostApi(slug) {
        try {
            return await this.databases.getDocument(
                server.databaseId, // databaseId
                server.collectId, // collectionId
                slug, // documentId
            )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async getPostsApi(queries= [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                server.databaseId, // databaseId
                server.collectId, // collectionId
                queries, // documentId
            )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    /////// upload file in storage

    async uploadFileApi(file){
        try {
                return await this.storage.createFile(
                    server.bucketId, // bucketId
                    ID.unique(), // fileId
                    file, // file
                    
                )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async deleteFileApi(fileId){
        try {
                return await this.storage.deleteFile(
                    server.bucketId, // bucketId
                    fileId, // fileId
                )
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    getFilePrevApi(fileId){
        return this.storage.getFilePreview(
            server.bucketId, // bucketId
            fileId, // fileId
        )
    }

}

const postServices = new DatabasesServices();

export default  postServices
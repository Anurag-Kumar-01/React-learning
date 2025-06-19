import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteurl) 
    .setProject(conf.appwriteprojectid);   
    this.account = new Account(this.client)          
    }
    
    async createAccount({email,password,Name}){
        try {
           const User = await this.account.create(ID.unique(),email,password,Name);
           if(User){
            //Login here//Call another method

            return this.login({email,password})


           }
           else{
            return User;
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            throw error ;
            
        }
    }
    
    async getCurrentUser() {
  try {
    return await this.account.get();
  } catch (error) {
    // Instead of throwing, return null if not logged in
    if (error.code === 401) return null;
    throw error;
  }
}

    async logout(){
        try {
           return await this.account.deleteSessions();
            
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService()

export default authService
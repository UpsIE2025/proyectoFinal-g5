import httpClient from "@/lib/http-client";
export class LoginService {

    private static instance: LoginService;

    private constructor() {
    }

    public static getInstance(): LoginService{
        if(!LoginService.instance){
            LoginService.instance = new LoginService();
        }
        return LoginService.instance;
    }

    loginUser(data : any){
        return httpClient.post(`/login`,data);
    }

}
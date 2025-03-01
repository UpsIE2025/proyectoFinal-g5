import httpClient from "@/lib/http-client";
export class RegisterService {

    private static instance: RegisterService;

    private constructor() {
    }

    public static getInstance(): RegisterService{
        if(!RegisterService.instance){
            RegisterService.instance = new RegisterService();
        }
        return RegisterService.instance;
    }

    registerUser(data : any){
        return httpClient.post(`/register`,data);
    }

}
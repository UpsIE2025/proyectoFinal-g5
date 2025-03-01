import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async validateToken(token: string):Promise<boolean>{
        return true;
    }
}

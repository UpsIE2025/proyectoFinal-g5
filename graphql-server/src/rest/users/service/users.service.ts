import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserInput } from '../../../module/users/dto/user/create-user.input';
import { HttpService } from '@nestjs/axios';
import { UserLogin } from 'src/module/users/dto/user-login/user-login';
import { AccessToken } from 'src/module/users/dto/access-token/access-token';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {

  private readonly baseUrl: string = 'http://localhost:3001';

  constructor(private readonly httpService: HttpService) { }

  async create(createUserInput: CreateUserInput): Promise<boolean> {
    try {
      await firstValueFrom(this.httpService.post(this.baseUrl + '/register', createUserInput));
      return true;

    } catch (error) {
      return false;
    }
  }

  async login(createUserInput: UserLogin): Promise<AccessToken> {
    try {
      const { data } = await firstValueFrom(this.httpService.post(this.baseUrl + '/login', createUserInput));

      return data;
    } catch (error) {

      if (error.response) {
        throw new HttpException(
          `Error en el login: ${error.response.data.message || 'Unknown error'}`,
          error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else if (error.request) {
        throw new HttpException(
          'No se pudo conectar al servidor de login.',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      } else {
        throw new HttpException('Error inesperado al procesar la solicitud de login.', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}

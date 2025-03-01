import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../../../module/users/dto/create-user.input';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

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

  async login(createUserInput: CreateUserInput): Promise<boolean> {
    try {
      await firstValueFrom(this.httpService.post(this.baseUrl + '/login', createUserInput));
      return true;

    } catch (error) {
      return false;
    }
  }
}

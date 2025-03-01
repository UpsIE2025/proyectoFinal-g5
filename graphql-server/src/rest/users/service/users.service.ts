import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {

  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly httpService: HttpService) { }

  async create(createUserInput: CreateUserInput) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post<CreateUserInput>(this.baseUrl, createUserInput).pipe(
          catchError((error: AxiosError) => {
            throw new Error('Error al crear el usuario: ' + error.message);
          }),
        ),
      );
      return data;
    } catch (error) {
      throw new Error(error.message || 'Unexpected error during user creation');
    }
  }

  async findAll() {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<CreateUserInput[]>(this.baseUrl).pipe(
          catchError((error: AxiosError) => {
            throw new Error('Error al obtener los usuarios: ' + error.message);
          }),
        ),
      );
      return data;
    } catch (error) {
      throw new Error(error.message || 'Unexpected error during fetching users');
    }
  }

  async findOne(id: number) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<CreateUserInput>(`${this.baseUrl}/${id}`).pipe(
          catchError((error: AxiosError) => {
            throw new Error('Error al obtener el usuario: ' + error.message);
          }),
        ),
      );
      return data;
    } catch (error) {
      throw new Error(error.message || 'Unexpected error during fetching user');
    }
  }


  async update(id: number, updateUserInput: UpdateUserInput) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put<CreateUserInput>(`${this.baseUrl}/${id}`, updateUserInput).pipe(
          catchError((error: AxiosError) => {
            throw new Error('Error al actualizar el usuario: ' + error.message);
          }),
        ),
      );
      return data;
    } catch (error) {
      throw new Error(error.message || 'Unexpected error during user update');
    }
  }


  async remove(id: number) {
    try {
      await firstValueFrom(
        this.httpService.delete(`${this.baseUrl}/${id}`).pipe(
          catchError((error: AxiosError) => {
            throw new Error('Error al eliminar el usuario: ' + error.message);
          }),
        ),
      );
      return `User with id #${id} was successfully removed`;
    } catch (error) {
      throw new Error(error.message || 'Unexpected error during user removal');
    }
  }
}

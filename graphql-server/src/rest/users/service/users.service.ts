import { Injectable} from '@nestjs/common';
import { UserDto } from '../dto/user.dto/user.dto';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {

    constructor(private readonly httpService: HttpService) { }
    baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

    async create(createUserDto: UserDto): Promise<any> {

        const { data } = await firstValueFrom(
            this.httpService.post<any>(this.baseUrl).pipe(
                catchError((error: AxiosError) => {
                    throw new Error('Error al crear el usuario: ' + error.message);
                }),
            ),
        )
        return data;
    }

    async findAll(): Promise<any> {
        const { data } = await firstValueFrom(
            this.httpService.get<UserDto[]>(this.baseUrl).pipe(
                catchError((error: AxiosError) => {
                    throw new Error('Error al obtener usuarios: ' + error.message);
                }),
            ),
        );
        return data;
    }
}

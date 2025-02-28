import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { UserDto } from '../dto/user.dto/user.dto';
import { UsersService } from '../service/users.service';
import { AuthGuard } from 'src/rest/auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    create(@Body() createUserDto: UserDto): any {
        return this.userService.create(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll(): any {
        return this.userService.findAll();
    }
}

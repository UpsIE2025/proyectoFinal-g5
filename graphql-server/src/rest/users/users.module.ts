import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { HttpModule } from '@nestjs/axios';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [HttpModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule { }

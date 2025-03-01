import { Module } from '@nestjs/common';
import { UsersService } from '../../rest/users/service/users.service';
import { HttpModule } from '@nestjs/axios';
import { UsersGrpcService } from 'src/grpc/users/service/users-grpc.service';
import { UsersResolver } from './resolver/users.resolver';

@Module({
  imports: [HttpModule],
  providers: [UsersService, UsersGrpcService, UsersResolver],
})
export class UsersModule { }

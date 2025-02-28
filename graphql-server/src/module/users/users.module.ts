import { Module } from '@nestjs/common';
import { UsersService } from '../../rest/users/service/users.service';
import { HttpModule } from '@nestjs/axios';
import { UsersResolver } from '../../rest/users/resolver/users.resolver';
import { UsersGrpcService } from 'src/grpc/users/service/users-grpc.service';
import { UsersGrpcResolver } from 'src/grpc/users/resolver/users-grpc.resolver';

@Module({
  imports: [HttpModule],
  providers: [UsersService, UsersResolver
    , UsersGrpcService, UsersGrpcResolver],
})
export class UsersModule { }

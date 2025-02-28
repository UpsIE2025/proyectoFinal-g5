import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersGrpcService } from '../service/users-grpc.service';
import { User } from 'src/rest/users/entities/user.entity';
import { CreateUserInput } from 'src/rest/users/dto/create-user.input';

@Resolver()
export class UsersGrpcResolver {
    constructor(private readonly userGrpcService: UsersGrpcService) {}

    @Mutation(() => User)
    async createUserGrpc(
      @Args('createUserInput') createUserInput: CreateUserInput,
    ): Promise<any> {
      const grpcRequest = {
        name: createUserInput.name,
        lastName: createUserInput.name,
        email: createUserInput.email,
        userName: createUserInput.name,
        password: createUserInput.password,
      };
  
      return this.userGrpcService.createUser(grpcRequest);
    }
  
    @Query(() => User)
    async findUserByUserNameGrpc(
      @Args('userName') userName: string,
    ): Promise<any> {
      return this.userGrpcService.findUserByUserName({ userName });
    }
}

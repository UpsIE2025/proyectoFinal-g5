import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from 'src/rest/users/service/users.service';
import { User } from '../entities/user.entity';
import { CreateUserInput } from '../dto/create-user.input';
import { UsersGrpcService } from 'src/grpc/users/service/users-grpc.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly userGrpcService: UsersGrpcService
  ) { }

  @Mutation(() => Boolean)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) : Promise<boolean> {

    //registro de usuario en grpc
    const grpcRequest = {
      name: createUserInput.name,
      lastName: createUserInput.name,
      email: createUserInput.email,
      userName: createUserInput.name,
      password: createUserInput.password,
    };

    this.userGrpcService.createUser(grpcRequest);

    return this.usersService.create(createUserInput);
  }
SS

  @Query(() => User, { name: 'user' })
  findOne(@Args('name', { type: () => String }) name: String) {
    return this.userGrpcService.findUserByUserName({ name });
  }
}

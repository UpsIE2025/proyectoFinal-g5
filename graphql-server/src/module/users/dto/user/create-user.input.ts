import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string
  @Field()
  email: string
  @Field()
  username: string
  @Field()
  password: string
}

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserDto {
    @Field()
    name: string
    @Field()
    email: string
    @Field()
    username: string
}

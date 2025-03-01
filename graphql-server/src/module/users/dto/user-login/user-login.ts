import { Field} from '@nestjs/graphql';

export class UserLogin {
      @Field()
      username: string
      @Field()
      password: string
}

import { Field } from '@nestjs/graphql';

export class AccessToken {
    @Field()
    access_token: string
    @Field()
    id_token: string
    @Field()
    scope: string
    @Field()
    expires_in: string
    @Field()
    token_type: string
}

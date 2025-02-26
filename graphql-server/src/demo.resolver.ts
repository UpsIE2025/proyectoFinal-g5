import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class DemoResolver {
    @Query(() => String)
    hello(): string {
        return "Hello word!";
    }
}
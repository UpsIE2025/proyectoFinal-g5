import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DemoResolver } from './demo.resolver';
import { AuthModule } from './rest/auth/auth.module';
import { UsersModule } from './rest/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(__dirname, 'schema.gql'),
    }),
    AuthModule
    , UsersModule
  ],
  controllers: [AppController],
  providers: [
    AppService
    , DemoResolver
  ],
})
export class AppModule { }

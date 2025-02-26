import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DemoResolver } from './demo.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(__dirname, 'schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService
    ,DemoResolver
  ],
})
export class AppModule { }

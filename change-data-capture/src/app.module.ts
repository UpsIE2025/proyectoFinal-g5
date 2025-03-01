import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { ConfigurationModule } from './config/config.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigurationModule,
    ClientsModule.registerAsync({
      clients: [
        {
          name: 'KAFKA_SERVICE',
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            name: 'KAFKA_SERVICE',
            transport: Transport.KAFKA,
            options: {
              client: {
                brokers: [`${configService.get<string>('KAFKA_HOST')}:${configService.get<number>('KAFKA_PORT')}`],
              },
              consumer: {
                groupId: 'debzium-group',
              },
            },
          }),
        }
      ]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: true,
        migrationsRun: false,
        entities: [UserEntity],
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
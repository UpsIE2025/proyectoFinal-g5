import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(UserEntity)
    private eventRepository: Repository<UserEntity>,
  ) { }

  onModuleInit() {
    console.log('Kafka Service initialized');
  }

  @MessagePattern(/^dbserver1\..+/)
  async handleDatabaseChange(@Payload() message: any) {
    console.log('Received message:', message.value);
    console.log('DATA', JSON.stringify(message))
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { UsersGrpcService } from './users-grpc.service';

describe('UsersGrpcService', () => {
  let service: UsersGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersGrpcService],
    }).compile();

    service = module.get<UsersGrpcService>(UsersGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

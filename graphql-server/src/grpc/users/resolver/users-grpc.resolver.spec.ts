import { Test, TestingModule } from '@nestjs/testing';
import { UsersGrpcResolver } from './users-grpc.resolver';

describe('UsersGrpcResolver', () => {
  let resolver: UsersGrpcResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersGrpcResolver],
    }).compile();

    resolver = module.get<UsersGrpcResolver>(UsersGrpcResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

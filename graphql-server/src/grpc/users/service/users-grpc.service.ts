import { Injectable, OnModuleInit } from '@nestjs/common';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { Observable } from 'rxjs';
import { join } from 'path';

interface IUserService {
  createUser(data: any, callback: (error: grpc.ServiceError | null, response: any) => void): void;
  findUserByUserName(data: any, callback: (error: grpc.ServiceError | null, response: any) => void): void;
}

@Injectable()
export class UsersGrpcService implements OnModuleInit {
  private client: grpc.Client;
  private userService: IUserService;

  constructor() {
    // Ruta al archivo .proto
    const protoPath = join(__dirname, '../../users/proto/user.proto');
    const packageDefinition = protoLoader.loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });

    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

    this.client = new (protoDescriptor as any).user.UserService(
      'localhost:9090', // Dirección del servidor gRPC
      grpc.credentials.createInsecure()
    );

    this.userService = this.client as unknown as IUserService;
  }

  onModuleInit() {
  }


  createUser(data: any): Observable<any> {
    return new Observable((observer) => {
      this.userService.createUser(data, (error, response) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(response);
          observer.complete();
        }
      });
    });
  }


  findUserByUserName(data: any): Observable<any> {
    return new Observable((observer) => {
      this.userService.findUserByUserName(data, (error, response) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(response);
          observer.complete();
        }
      });
    });
  }
}

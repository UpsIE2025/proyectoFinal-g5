import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = GqlExecutionContext.create(context).getContext();
    const authHeader = request.req.headers["authorization"];

    console.log(authHeader);

    const result = this.authService.validateToken(authHeader);

    return result;
  }
}

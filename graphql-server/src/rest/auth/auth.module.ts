import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';

@Module({
    providers:[AuthService, AuthGuard],
    exports:[AuthService, AuthGuard],
})
export class AuthModule {}

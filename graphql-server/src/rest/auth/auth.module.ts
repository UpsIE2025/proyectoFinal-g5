import { Module } from '@nestjs/common';
import { AuthGuard } from './guard/auth.guard';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './service/auth.service';

@Module({
    imports: [HttpModule],
    providers: [AuthGuard, AuthService],
    exports: [AuthGuard, AuthService],
})
export class AuthModule { }

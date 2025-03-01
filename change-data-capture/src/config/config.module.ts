import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './env-vars.config';
import { configurationValidator } from 'src/validators/src/validators/configuration.validator';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      ignoreEnvVars: true,
      load: [configuration],
      validationSchema: configurationValidator,
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
  ],
  exports: [ConfigModule],
})
export class ConfigurationModule {}
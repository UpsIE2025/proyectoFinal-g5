import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaConfig {
  constructor(
    @Inject(ConfigService)
    private config: ConfigService,
  ) {}

  get configuration() {
    const host = this.config.get('KAFKA_HOST');
    const port = parseInt(this.config.get('KAFKA_PORT') || '9092', 10);

    return {
      host: `${host}:${port}`,
    };
  }
}
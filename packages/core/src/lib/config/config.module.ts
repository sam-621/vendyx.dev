import { Global, Module } from '@nestjs/common';
import { ConfigModule as NConfigModule } from '@nestjs/config';

import envsConfig from './envs.config';
import { configValidator } from './validators.config';

@Global()
@Module({
  imports: [
    NConfigModule.forRoot({
      isGlobal: true,
      load: [envsConfig],
      validate: configValidator,
      envFilePath: ['.env']
    })
  ],
  exports: [NConfigModule]
})
export class ConfigModule {}

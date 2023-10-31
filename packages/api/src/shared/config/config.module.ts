import { Global, Module } from '@nestjs/common'
import { ConfigModule as NConfigModule } from '@nestjs/config'
import envs from './envs'
import { configValidator } from './validators.config'

@Global()
@Module({
  imports: [
    NConfigModule.forRoot({
      isGlobal: true,
      load: [envs],
      validate: configValidator,
      envFilePath: ['.env', '.env.local']
    })
  ],
  exports: [NConfigModule]
})
export class ConfigModule {}

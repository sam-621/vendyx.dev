import { Module } from '@nestjs/common'
import { SharedModule } from './shared'

@Module({
  imports: [SharedModule]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AdminUiModule } from './admin-ui';

@Module({
  imports: [AdminUiModule]
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { AdminResolver } from './resolvers';

import { ServiceModule } from '@/app/service';

@Module({
  imports: [ServiceModule],
  providers: [AdminResolver]
})
export class AdminApiModule {}

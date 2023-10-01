import { Global, Module } from '@nestjs/common'
import { DateScalar } from './date-scalar.service'
import { IDScalar } from './id-scalar.service'

@Global()
@Module({
  providers: [DateScalar, IDScalar],
  exports: [DateScalar, IDScalar]
})
export class ScalarsModule {}

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { LoggerService } from './shared/logger'
import { AllExceptionsFilter } from './shared/filters'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: 'http://localhost:3000' }
  })

  const loggerService = await app.resolve(LoggerService)
  app.useGlobalFilters(new AllExceptionsFilter(loggerService))

  await app.listen(5000)
}
bootstrap()

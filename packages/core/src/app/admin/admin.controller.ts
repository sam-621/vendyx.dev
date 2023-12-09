import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';

@Controller('api')
export class AdminController {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>
  ) {}

  @Get('/')
  async getHello(): Promise<string> {
    const result = await this.adminRepository.find();
    console.log({
      result
    });

    return 'Hello World!';
  }
}

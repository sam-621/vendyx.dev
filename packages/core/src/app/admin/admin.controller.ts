import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './entities';
import { Repository } from 'typeorm';

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

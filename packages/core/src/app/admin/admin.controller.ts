import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities';
import { Repository } from 'typeorm';

@Controller('api')
export class AdminController {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>
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

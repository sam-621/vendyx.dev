import { Injectable } from '@nestjs/common';
import { getUrl } from '@vendyx/theme';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

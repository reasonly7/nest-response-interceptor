import { Controller, Get } from '@nestjs/common';
import { ResponseData } from './response/ResponseData';

@Controller()
export class AppController {
  @Get()
  sayHello() {
    return 'Hello, World!';
  }

  @Get('test')
  test() {
    return new ResponseData('Hello, World!', 'Request Successfully!', 201);
  }
}

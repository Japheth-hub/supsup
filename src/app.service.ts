import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  list: object = {
    number1: 5,
    number2: 10,
    number3: 20,
    number4: 30,
    number5: 40
  }

  getHello(): string {
    return 'Hello World!';
  }

  postNumber(): void {
    console.table(this.list);
  }

}

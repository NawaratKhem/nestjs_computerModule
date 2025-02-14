import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showinformation')
  showInfo(): string {
    return this.appService.showInfo();
  }

  @Get('/showjson')
  showJSON(): UserDTO {
    return this.appService.showJson();
  }

  @Get('/githubtest')
  showGitHubTest(): string {
    return this.appService.gitTesting();
  }
}

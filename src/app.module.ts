import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { ResponseInterceptorProvider } from './response/response.interceptor';

@Module({
  imports: [importConfigModule()],
  controllers: [AppController],
  providers: [ResponseInterceptorProvider],
})
export class AppModule {}

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CronJob } from 'cron';
import { MatcherHandler } from './handlers/matches/matcher.handler';
import { threadId } from 'worker_threads';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Kashish Impact Doc')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('kashih')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // */1 * * * *  => meaans cron job will be executes every 1 minute
  const x = new MatcherHandler(1 as any, 2 as any);
  //TODO: inject real instances of supplier and customer in order to get data from DB
  const cronJob = new CronJob('*/1 * * * *', async () => {
    try {
      const dateTime = new Date();
      console.log(dateTime + 'Kasish Impact !');
      console.log('Thread in main: ' + threadId);
      x.handle();
    } catch (e) {
      console.error(e);
    }
  });

  // Start job
  if (!cronJob.running) {
    cronJob.start();
  }

  console.log('enviroment:' + JSON.stringify(process.env, null, 2));

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();

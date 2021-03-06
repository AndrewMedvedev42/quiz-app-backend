import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: String('http://localhost:3000'), credentials: true });
  const config = new DocumentBuilder()
    .setTitle('Futurama team')
    .setDescription('Job search website documentation')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server is running: ${PORT}`));
}
start();

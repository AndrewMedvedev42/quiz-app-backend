import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpModule } from './modules/signup/signup.module';
import { UserEntity } from './modules/enteties/users.entity';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities:[UserEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    forwardRef(() => SignUpModule),
    QuizModule
  ],
})
export class AppModule {}

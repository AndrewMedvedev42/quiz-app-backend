import { Module } from '@nestjs/common';
import { SignUpService } from './signup.service';
import { SignUpController } from './signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../enteties/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [SignUpService],
  controllers: [SignUpController]
})
export class SignUpModule {}
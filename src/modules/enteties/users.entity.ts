import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
import { ApiProperty } from '@nestjs/swagger';

  @Entity()
  export class UserEntity extends BaseEntity {
    @ApiProperty({ example: '1', description: 'Unique identificator' })
    @PrimaryGeneratedColumn({ type: 'int' })
    user_id: number;
  
    @ApiProperty({ example: 'Bob', description: 'First name' })
    @Column({ type: 'varchar', width: 30 })
    user_name: string;
  
    @ApiProperty({ example: 'qwerty@gmail.com', description: 'email' })
    @Column({ type: 'varchar', width: 50, unique: true })
    email: string;
  
    @ApiProperty({ example: '111111', description: 'password' })
    @Column({ type: 'varchar', width: 50 })
    password: string;
}
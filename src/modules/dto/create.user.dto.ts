import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '1', description: 'id' })
  user_id: number;

  @ApiProperty({ example: 'Bob', description: 'First name' })
  user_name: string;

  @ApiProperty({ example: 'qwert@gmail.com', description: 'email' })
  email: string;

  @ApiProperty({ example: '111111', description: 'password' })
  password: string;
}
import { Body, Controller, Post} from '@nestjs/common';
import { SignUpService } from './signup.service';
import { CreateUserDto } from "../dto/create.user.dto";

@Controller()
export class SignUpController {
    constructor(private SignUpService: SignUpService) {}

    @Post('signup')
    async add(@Body() userDto:CreateUserDto){
        try {
            return await this.SignUpService.add(userDto);
        } catch (error) {
            return error
        }
        
    }
}

import { Controller, Get, Param, Query} from '@nestjs/common';
import { QuizService} from "./quiz.service";

@Controller('quizes')
export class QuizController {
    constructor(private QuizService: QuizService) {}
    
    @Get()
    async get(@Query() query){
        try {
            return await this.QuizService.get(query);
        } catch (error) {
            return error
        }
        
    }
    @Get(':id')
    async getOne(@Param('id') id){
        try {
            return await this.QuizService.getOne(id);
        } catch (error) {
            return error
        }
        
    }
}

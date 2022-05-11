import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import * as Quizes from "./quizes.json";

@Injectable()
export class QuizService {
    async get(query) {
        const { name, category, length } = query
        let result = [...Quizes.quizes]

        if (name) {
            result = result.filter((item)=>item.title.toLowerCase().includes(name.toLowerCase()))
        }

        if (category) {
            result = result.filter((item)=>item.category.includes(category))
        }

        if (length) {
            result = result.splice(0, length)
        }

        return result
    }

    async getOne(id) {
        return Quizes.quizes.find((item)=>item.id == id)
    }
}

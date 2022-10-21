import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quiService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quiService.getAllQuiz();
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quiService.createNewQuiz(quizData);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService],
})
export class QuizModule {}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Quiz } from 'src/modules/quiz/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2004',
  database: 'quiz',
  entities: [Quiz],
  synchronize: true, // TODO: false in production
};

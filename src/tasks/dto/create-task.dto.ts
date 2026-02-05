import { IsString, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  description: string;

  @IsDateString()
  dueDate: string;
}

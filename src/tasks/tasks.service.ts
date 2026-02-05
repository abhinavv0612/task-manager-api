import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TeamMember } from '../team/team-member.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,

    @InjectRepository(TeamMember)
    private readonly memberRepo: Repository<TeamMember>,
  ) {}

  async create(dto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepo.create({
      description: dto.description,
      dueDate: new Date(dto.dueDate),
    });

    return this.taskRepo.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  async assign(taskId: number, memberId: number): Promise<{ message: string }> {
    const task = await this.taskRepo.findOneBy({ id: taskId });
    if (!task) throw new NotFoundException('Task not found');

    const member = await this.memberRepo.findOneBy({ id: memberId });
    if (!member) throw new NotFoundException('Member not found');

    task.assignee = member;
    await this.taskRepo.save(task);

    return { message: 'Task assigned successfully' };
  }

  async updateStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) throw new NotFoundException('Task not found');

    task.status = status;
    return this.taskRepo.save(task);
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TeamMember } from '../team/team-member.entity';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ManyToOne(() => TeamMember, (member) => member.tasks, {
    eager: true, // automatically load assignee
    nullable: true, // task can exist without assignee
  })
  assignee!: TeamMember | null;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Team } from './team.entity';
import { Task } from '../tasks/task.entity';

@Entity()
export class TeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Team, (team) => team.members)
  team: Team;

  // 🔥 ADD THIS
  @OneToMany(() => Task, (task) => task.assignee)
  tasks: Task[];
}

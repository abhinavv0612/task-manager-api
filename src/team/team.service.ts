import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { TeamMember } from './team-member.entity';
import { CreateTeamDto } from './dto/create-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepo: Repository<Team>,

    @InjectRepository(TeamMember)
    private readonly memberRepo: Repository<TeamMember>,
  ) {}

  async createTeam(dto: CreateTeamDto): Promise<{ message: string }> {
    // Create Team
    const team = this.teamRepo.create({ name: dto.name });
    const savedTeam = await this.teamRepo.save(team);

    // Create Members linked to team
    const members = dto.members.map((member) =>
      this.memberRepo.create({
        name: member.name,
        email: member.email,
        team: savedTeam,
      }),
    );

    await this.memberRepo.save(members);

    return { message: 'Team created successfully' };
  }
}

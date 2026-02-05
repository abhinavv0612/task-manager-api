import { IsString, IsArray } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  name: string;

  @IsString()
  email: string;
}

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsArray()
  members: CreateMemberDto[];
}

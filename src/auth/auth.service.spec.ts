import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(username: string, password: string) {
    if (
      username === process.env.USER_NAME &&
      password === process.env.USER_PASS
    ) {
      return {
        access_token: this.jwtService.sign({ username }),
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}

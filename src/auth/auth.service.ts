import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signIn() {
    return { msg: 'I am signin in' };
  }

  signUp() {
    return { msg: 'I have signed up' };
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { loginSchema, signUpSchema } from '@/app/lib/validation';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = signUpSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    const { email, password, confirm_password, name } = validation.data;

    const all_users = await prisma.users.findMany();
    const have_user = all_users.find((user) => user.email === email);
    if (have_user) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }
    const hashed_password = await bcrypt.hash(password, 13);

    await prisma.users.create({
      data: {
        email: email,
        password: hashed_password,
        name: name,
        profile_picture: 'asd',
      },
    });

    return NextResponse.json({ email, password, confirm_password, name });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred', error },
      { status: 400 }
    );
  }
}

import { NextResponse } from 'next/server';
import { shops } from '../../../data/shops';

export async function GET() {
  return NextResponse.json(shops);
}

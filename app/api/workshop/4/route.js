import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'http://192.168.10.213/4';

export async function GET(request) {
  const res = await fetch(DATA_SOURCE_URL, { cache: 'no-store' });
  const data = await res.json();

  return NextResponse.json(data);
}

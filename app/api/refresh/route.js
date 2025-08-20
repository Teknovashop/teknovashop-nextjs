import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  if (token !== process.env.REFRESH_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Aquí iría la lógica para revalidar caché o regenerar contenido
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

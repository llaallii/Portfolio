import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (!endpoint) {
      console.error('CONTACT_FORM_ENDPOINT is not set');
      return NextResponse.json({ error: 'Service unavailable' }, { status: 500 });
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error('Request failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

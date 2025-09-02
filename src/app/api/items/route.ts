import { mockItems } from '@/data/mockItems';
import { ItemStatus } from '@/types/item';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const title = searchParams.get('title') || '';
  const status = searchParams.get('status') as ItemStatus | null;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '5');

  let filteredItems = [...mockItems];

  if (title) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (status) {
    filteredItems = filteredItems.filter((item) => item.status === status);
  }

  const total = filteredItems.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    items: paginatedItems,
    total,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.title || !body.description || !body.status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newItem = {
      id:
        mockItems.length > 0
          ? Math.max(...mockItems.map((item) => item.id)) + 1
          : 1,
      title: body.title,
      description: body.description,
      status: body.status,
      createdAt: new Date().toISOString(),
    };

    mockItems.unshift(newItem);

    await new Promise((resolve) => setTimeout(resolve, 300));

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}

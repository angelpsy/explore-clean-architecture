import { TPostRepositorySaveDate, TPostRepositoryUpdateDate } from '@/../domain/repositories/post-repository';
import { getPostRepositoryRealtimeInstance } from '@/helpers/post-repository-realtime-instance';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const postRepositoryInstance = await getPostRepositoryRealtimeInstance();
    const posts = await postRepositoryInstance.findByFilter();
    const data = {
      items: posts
    };
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({
      error: (error as Error).message || 'some wrong',
    }, {
      status: 504,
      statusText: (error as Error).message || 'some wrong',
    });
  }
}

export async function POST(req: Request) {
  const data = (await req.json()) as TPostRepositorySaveDate;

  try {
    const postRepositoryInstance = getPostRepositoryRealtimeInstance();
    const post = await postRepositoryInstance.save(data);
    const responsData = {
      item: post,
    };
    return NextResponse.json({ data: responsData });
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message || 'some wrong',
      },
      {
        status: 504,
        statusText: (error as Error).message || 'some wrong',
      }
    );
  }
}
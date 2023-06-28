import { TPostRepositoryUpdateDate } from '@/../domain/repositories/post-repository';
import { getPostRepositoryRealtimeInstance } from '@/helpers/post-repository-realtime-instance';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const postRepositoryInstance = await getPostRepositoryRealtimeInstance();
    const post = await postRepositoryInstance.findById(id);
    if (!post) {
      return NextResponse.json(
        {
          error: 'Post not found',
        },
        {
          status: 404,
          statusText: 'not found',
        }
      );
    }
    const data = {
      item: post,
    };
    return NextResponse.json({ data });
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

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const data = (await req.json()) as TPostRepositoryUpdateDate;

  try {
    const postRepositoryInstance = await getPostRepositoryRealtimeInstance();
    const post = await postRepositoryInstance.update(id, data);
    if (!post) {
      return NextResponse.json(
        {
          error: 'Post not found',
        },
        {
          status: 404,
          statusText: 'not found',
        }
      );
    }
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

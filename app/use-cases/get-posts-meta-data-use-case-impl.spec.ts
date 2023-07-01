import { GetPostsMetaDataUseCaseImpl } from './get-posts-meta-data-use-case-impl';
import { TPostRepository } from '../../domain/repositories/post-repository';
import { TPost } from '../../domain/entities/post';

const getPosts = (): TPost[] => [
  {
    id: '0',
    title: '10 Surprising Benefits of Meditation for Your Mental Health',
    excerpt:
      "One unexpected benefit of meditation is its ability to improve your creativity and boost your problem-solving skills. Studies have shown that regular meditation practice can increase activity in the prefrontal cortex, which is responsible for higher-level thinking, decision making, and creativity. By clearing your mind of clutter and distractions, meditation can help you tap into your inner wisdom and find innovative solutions to complex problems. So if you're looking to supercharge your creativity, adding meditation to your daily routine might be just what you need.",
    content: `<ul>
    <li>Coding is a highly sought-after skill in the job market</li>
    <li>Coding teaches problem-solving and critical thinking</li>
    <li>Coding can lead to the development of innovative solutions</li>
    <li>Coding is a gateway to tech entrepreneurship</li>
    <li>Coding is a lifelong learning opportunity</li>
  </ul>
  <p>So if you haven't already, consider learning how to code today!</p>`,
    createdAt: '2023-05-09T14:30:15Z',
    updatedAt: '2023-05-09T14:30:15Z',
  },
];

describe('GetPostsMetaDataUseCaseImpl', () => {
  let getPostsMetaDataUseCaseImpl: GetPostsMetaDataUseCaseImpl;
  let repository: TPostRepository;

  beforeEach(() => {
    repository = {
      findByFilter: jest.fn().mockReturnValue({
        items: getPosts(),
        metadata: {
          total: getPosts().length,
        },
      }),
    } as never as TPostRepository;
    getPostsMetaDataUseCaseImpl = new GetPostsMetaDataUseCaseImpl(repository);
  });

  it('method "execute" should call "findByFilter" method of repository once', async () => {
    await getPostsMetaDataUseCaseImpl.execute();
    expect(repository.findByFilter).toBeCalledTimes(1);
  });

  it('method "execure" should be return the result of "findByFilter" method of repository', async () => {
    const result = await getPostsMetaDataUseCaseImpl.execute();

    expect(result).toEqual(
      (repository.findByFilter as any).mock.results[0].value.metadata
    );
  });
});

import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import { GetPostByIdUseCase } from './get-post-by-id-use-case-ipml';

const getPost = (): TPost => ({
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
});

describe('GetPostByIdUseCase', () => {
  let repository: TPostRepository;
  let getPostByIdUseCaseImpl: GetPostByIdUseCase;

  beforeEach(() => {
    repository = {
      findById: jest.fn().mockReturnValue(getPost()),
    } as never as TPostRepository;
    getPostByIdUseCaseImpl = new GetPostByIdUseCase(repository);
  });

  test('method "execute" should call "findById" method of repository once', async () => {
    await getPostByIdUseCaseImpl.execute('0');
    expect(repository.findById).toHaveBeenCalledWith('0');
    expect(repository.findById).toBeCalledTimes(1);
  });

  test('method "execute" should return the result of "findById" method of repository', async () => {
    const result = await getPostByIdUseCaseImpl.execute('0');
    expect(result).toEqual((repository.findById as any).mock.results[0].value);
  });
});

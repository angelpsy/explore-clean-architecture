import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import { TCreatePostData } from '../../domain/use-cases/create-post-use-case';
import { CreatePostUseCaseImpl } from './create-post-use-case-ipml';

const getPostData = (): TCreatePostData => ({
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
});

const getPost = (): TPost => ({
  id: '0',
  createdAt: '2023-05-09T14:30:15Z',
  updatedAt: '2023-05-09T14:30:15Z',
  ...getPostData(),
});

describe('CreatePostUseCaseImpl', () => {
  let repository: TPostRepository;
  let createPostUseCaseImpl: CreatePostUseCaseImpl;

  beforeEach(() => {
    repository = {
      save: jest.fn().mockReturnValue(getPost()),
    } as never as TPostRepository;
    createPostUseCaseImpl = new CreatePostUseCaseImpl(repository);
  });

  test('method "execute" should call "save" method of repository once with correct parameters', async () => {
    const postData = getPostData();
    await createPostUseCaseImpl.execute(postData);
    expect(repository.save).toHaveBeenCalledWith(postData);
    expect(repository.save).toBeCalledTimes(1);
  });

  test('method "execute" should return the result of "save" method of repository', async () => {
    const postData = getPostData();
    const result = await createPostUseCaseImpl.execute(postData);
    expect(result).toEqual((repository.save as any).mock.results[0].value);
  });
});

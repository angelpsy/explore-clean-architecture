import { TPost } from '../../domain/entities/post';
import { TCreatePostData } from '../../domain/use-cases/create-post-use-case';
import { TUpdatePostData } from '../../domain/use-cases/update-post-use-case';
import { PostRepositoryRealtime } from '../../infrastructure/repositories/post-repository-realtime';
import { CreatePostUseCaseImpl } from '../use-cases/create-post-use-case-ipml';
import { DeletePostUseCaseImpl } from '../use-cases/delete-post-use-case-ipml';
import { GetPostByIdUseCase } from '../use-cases/get-post-by-id-use-case-ipml';
import { GetPostsUseCaseImpl } from '../use-cases/get-posts-use-case-ipml';
import { UpdatePostUseCaseImpl } from '../use-cases/update-post-use-case-ipml';
import { PostService } from './post-service';

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

describe('ServicePost', () => {
  let postService: PostService;
  beforeEach(() => {
    const repository = new PostRepositoryRealtime();
    const createPostUseCaseImpl = new CreatePostUseCaseImpl(repository);
    const updatePostUseCaseImpl = new UpdatePostUseCaseImpl(repository);
    const deletePostUseCaseImpl = new DeletePostUseCaseImpl(repository);
    const getPostByIdPostUseCaseImpl = new GetPostByIdUseCase(repository);
    const getPostsUseCaseImpl = new GetPostsUseCaseImpl(repository);
    postService = new PostService(
      createPostUseCaseImpl,
      updatePostUseCaseImpl,
      deletePostUseCaseImpl,
      getPostByIdPostUseCaseImpl,
      getPostsUseCaseImpl
    );
  });

  // Test the createPost method
  describe('createPost', () => {
    test('should create a new post', async () => {
      const postData = getPostData();
      await postService.createPost(postData);
    });
  });

  // Test the updatePost method
  describe('updatePost', () => {
    test('should update an existing post', async () => {
      const postData = getPostData();
      const post = await postService.createPost(postData);
      const postId = post.id;
      const updateData: TUpdatePostData = {
        title: 'udpated title',
        content: 'updated content',
        excerpt: 'updated excerpt',
      };
      const result = await postService.updatePost(postId, updateData);
      expect(result).toEqual({
        ...post,
        updatedAt: result.updatedAt,
        ...updateData,
      });
    });
  });

  // Test the deletePost method
  describe('deletePost', () => {
    test('should delete an existing post', async () => {
      const postData = getPostData();
      const post = await postService.createPost(postData);
      const postId = post.id;
      const findedPost = await postService.getPostById(postId);
      await postService.deletePost(postId);
      const result = await postService.getPostById(postId);

      expect(findedPost).not.toBe(null);
      expect(result).toBe(null);
    });
  });

  // Test the getPostById method
  describe('getPostById', () => {
    test('should retrieve post by id', async () => {
      const postData = getPostData();
      const post = await postService.createPost(postData);
      const postId = post.id;
      const result = await postService.getPostById(postId);

      expect(result?.title).toEqual(postData.title);
      expect(result?.excerpt).toEqual(postData.excerpt);
      expect(result?.content).toEqual(postData.content);
    });
  });

  // Test the getPosts method
  describe('getPosts', () => {
    test('should restrieve all posts', async () => {
      const postData = getPostData();
      await postService.createPost(postData);
      await postService.createPost(postData);
      const posts = await postService.getPosts();
      expect(posts.length).toBe(2);
      expect(posts[0]?.title).toEqual(postData.title);
      expect(posts[0]?.excerpt).toEqual(postData.excerpt);
      expect(posts[0]?.content).toEqual(postData.content);
      expect(posts[1]?.title).toEqual(postData.title);
      expect(posts[1]?.excerpt).toEqual(postData.excerpt);
      expect(posts[1]?.content).toEqual(postData.content);
    });
  });
});

import { TPost } from '../../domain/entities/post';
import { TPostRepository } from '../../domain/repositories/post-repository';
import { TGetPostByIdUseCase } from '../../domain/use-cases/get-post-by-id-use-case';

export class GetPostByIdUseCase implements TGetPostByIdUseCase {
  constructor(private postRepository: TPostRepository) {}

  async execute(id: TPost['id']): Promise<TPost | null> {
    return await this.postRepository.findById(id);
  }
}

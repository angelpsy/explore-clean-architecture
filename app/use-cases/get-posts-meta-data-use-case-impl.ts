import { TPostRepository } from '../../domain/repositories/post-repository';
import { TGetPostsMetaDataUseCase } from '../../domain/use-cases/get-posts-meta-data-use-case';

export class GetPostsMetaDataUseCaseImpl implements TGetPostsMetaDataUseCase {
  constructor(private postRepository: TPostRepository) {}

  async execute(): Promise<{
    total: number;
  }> {
    return (await this.postRepository.findByFilter()).metadata;
  }
}

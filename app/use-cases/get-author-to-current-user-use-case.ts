import { TAuthor } from '../../domain/entities/author';
import { TAuthorRepository } from '../../domain/repositories/author-repository';
import { TGetAuthoToCurrentUserUseCase } from '../../domain/use-cases/get-author-to-current-user-use-case';

export class GetAuthoToCurrentUserUseCase
  implements TGetAuthoToCurrentUserUseCase
{
  constructor(private authorRepository: TAuthorRepository) {}

  async execute(): Promise<TAuthor> {
    return await this.authorRepository.getAuthorToCurrentUser();
  }
}

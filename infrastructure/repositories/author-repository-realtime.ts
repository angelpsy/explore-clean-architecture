import { TAuthor } from '../../domain/entities/author';
import { TAuthorRepository } from '../../domain/repositories/author-repository';

let instance: TAuthorRepository | null = null;

export class AuthorRepositoryRealtime implements TAuthorRepository {
  getAuthorToCurrentUser(): Promise<TAuthor> {
    return Promise.resolve({
      id: '0',
      name: 'Name Author',
      email: 'email@example.com',
      siteUrl: 'https//example.com',
    });
  }
  getInstance(): TAuthorRepository {
    if (!instance) {
      instance = new AuthorRepositoryRealtime();
    }
    return instance;
  }
}

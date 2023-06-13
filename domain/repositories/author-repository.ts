import { TAuthor } from '../entities/author';
import { TSingletone } from '../../types/helper';

type TAuthorRepositoryBase = {
  getAuthorToCurrentUser(): Promise<TAuthor>;
};

export type TAuthorRepository = TSingletone<TAuthorRepositoryBase> &
  TAuthorRepositoryBase;

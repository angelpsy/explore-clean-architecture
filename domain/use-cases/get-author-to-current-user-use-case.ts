import { TAuthor } from '../entities/author';

export type TGetAuthoToCurrentUserUseCase = {
  execute(): Promise<TAuthor>;
};

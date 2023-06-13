import { TPost } from '../entities/post';

export type TGetPostByIdUseCase = {
  execute(id: TPost['id']): Promise<TPost | null>;
};

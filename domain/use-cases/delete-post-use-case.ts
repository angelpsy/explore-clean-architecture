import { TPost } from '../entities/post';

export type TDeletePostUseCase = {
  execute(id: TPost['id']): Promise<void>;
};

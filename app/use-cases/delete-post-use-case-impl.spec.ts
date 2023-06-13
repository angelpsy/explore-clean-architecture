import { TPostRepository } from '../../domain/repositories/post-repository';
import { DeletePostUseCaseImpl } from './delete-post-use-case-ipml';

describe('DeletePostUseCaseImlp', () => {
  let repository: TPostRepository;
  let deletePostUseCaseImlp: DeletePostUseCaseImpl;

  beforeEach(() => {
    repository = {
      delete: jest.fn(),
    } as never as TPostRepository;
    deletePostUseCaseImlp = new DeletePostUseCaseImpl(repository);
  });

  test('method "execute" should call "delete" method of repository once', async () => {
    await deletePostUseCaseImlp.execute('0');
    expect(repository.delete).toBeCalledTimes(1);
  });
});

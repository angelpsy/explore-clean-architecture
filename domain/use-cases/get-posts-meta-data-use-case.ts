export type TGetPostsMetaDataUseCase = {
  execute(): Promise<{
    total: number;
  }>;
};

import { TEmail, TId, TUrl } from '../../types/helper';

export type TAuthor = {
  id: TId;
  name: string;
  email: TEmail;
  siteUrl?: TUrl;
};

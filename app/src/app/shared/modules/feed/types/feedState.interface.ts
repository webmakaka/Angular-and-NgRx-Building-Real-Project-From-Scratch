import { IGetFeedResponse } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedResponse | null;
}

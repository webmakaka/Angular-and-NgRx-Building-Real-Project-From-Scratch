import { IAuthState } from 'src/app/auth/types/authState.interface';
import { IFeedState } from 'src/app/shared/modules/feed/types/feedState.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}

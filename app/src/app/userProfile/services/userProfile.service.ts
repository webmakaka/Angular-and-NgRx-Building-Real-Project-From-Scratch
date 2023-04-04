import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { constants } from 'src/app/constants';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { GetUserProfileResponseInterface } from 'src/app/userProfile/types/getUserProfileResponse.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = constants.apiUrl + `/profiles/${slug}`;
    return this.http
      .get<GetUserProfileResponseInterface>(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }
}

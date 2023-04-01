import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from 'src/app/constants';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<{}> {
    const url = constants.apiUrl + `/articles/${slug}`;
    return this.http.delete<{}>(url);
  }
}

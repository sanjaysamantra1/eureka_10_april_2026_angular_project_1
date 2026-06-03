import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comment_api = 'ttps://jsonplaceholder.typicode.com/comments';

  httpClient = inject(HttpClient);

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.comment_api);
  }
}

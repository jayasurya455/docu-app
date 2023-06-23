import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../constants/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  public getAllDetails(userMailId: string): Observable<Object> {
    const body = { user_mail_id: userMailId };
    return this.http.post(apiUrl, body);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  send(data) {
    return this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, {
      responseType: 'text',
    });
  }
}

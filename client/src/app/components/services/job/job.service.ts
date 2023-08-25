import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseApiUrl = environment.apiUrl
  private apiUrl = `${this.baseApiUrl}jobs`

  constructor( private http: HttpClient ) { }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
}

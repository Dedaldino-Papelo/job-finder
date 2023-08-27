import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Job } from '../../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseApiUrl = environment.apiUrl
  private apiUrl = `${this.baseApiUrl}jobs`

  constructor( private http: HttpClient ) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl)
  }

  getJob(id: string): Observable<Job> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Job>(url)
  }
}

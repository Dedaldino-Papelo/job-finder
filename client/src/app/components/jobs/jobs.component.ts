import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job/job.service';
import { Job } from '../interfaces/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = []

  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.jobService.getJobs().subscribe(data => {
      const newData = data
      newData.map(item => {
        let searchRegExp  = /\//g
        item.createdAt = new Date(item.createdAt!)
        .toLocaleDateString('pt-BR')
        .replace(searchRegExp, '-')
        
        item.expirationDate = new Date(item.expirationDate!)
        .toLocaleDateString('pt-BR')
        .replace(searchRegExp, '-')
      })
      this.jobs = newData
    }, (error) => {
      console.error('Error fetching data:', error);
    })
  }

}

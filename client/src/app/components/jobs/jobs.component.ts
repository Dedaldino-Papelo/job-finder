import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: any[] = []

  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data
      console.log(this.jobs)
    }, (error) => {
      console.error('Error fetching data:', error);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job/job.service';
import { Job } from '../../interfaces/job';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job?: Job

  constructor(
    private jobService: JobService, 
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.jobService.getJob(id!).subscribe(data => {
      data.expirationDate = new Date(data.expirationDate!).toLocaleDateString('pt-BR')
      this.job = data
    })    
  }
}

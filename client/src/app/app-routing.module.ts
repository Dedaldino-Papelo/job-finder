import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { JobDetailsComponent } from './components/pages/job-details/job-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

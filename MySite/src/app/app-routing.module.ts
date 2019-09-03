import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/components/about-me.component';
import { PersonalComponent } from './pages/components/personal.component';
import { ExperienceComponent } from './pages/components/experience.component';
import {SkillsComponent} from './pages/components/skills.component';
import { ProjectsComponent } from './pages/components/projects/projects.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '**',
    redirectTo: 'about'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

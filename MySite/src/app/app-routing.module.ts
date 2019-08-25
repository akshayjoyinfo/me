import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/components/about-me.component';
import { PersonalComponent } from './pages/components/personal.component';
import { ExperienceComponent } from './pages/components/experience.component';

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
    path: '**',
    redirectTo: 'about'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/components/about-me.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

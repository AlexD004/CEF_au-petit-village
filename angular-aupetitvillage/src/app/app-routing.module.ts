import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Import components for routing */
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

const routes: Routes = [
  { path:"", component: PageHomeComponent },
  { path:"apropos", component: PageAboutComponent },
  { path:"contact", component: PageContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

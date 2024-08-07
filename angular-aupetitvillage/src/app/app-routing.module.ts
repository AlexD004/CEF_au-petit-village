import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Import components for routing */
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"apropos", component: AboutComponent },
  { path:"contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

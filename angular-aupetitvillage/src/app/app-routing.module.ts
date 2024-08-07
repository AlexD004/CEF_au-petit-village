import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Import components for routing */
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"apropos", component: AboutComponent },
  { path:"contact", component: ContactComponent},
  { path:"produit/:slug", component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

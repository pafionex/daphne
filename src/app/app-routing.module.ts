import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactComponent } from './content/contact/contact.component';

const routes: Routes = [
{
	path: '',
	component: HomeComponent
},
{
	path: 'about',
	component: AboutComponent
},
{
	path: 'services',
	component: ServicesComponent
},
{
	path: 'contact',
	component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

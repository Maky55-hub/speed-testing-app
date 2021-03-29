import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/pages/contact-detail/contact-detail.component';


const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

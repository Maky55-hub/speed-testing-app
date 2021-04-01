import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/pages/contact-detail/contact-detail.component';
import { ContactResolverService } from './services/contact-resolver.service';


const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
    resolve: {
      contact: ContactResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

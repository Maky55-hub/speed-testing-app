import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatSliderModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatIconModule
} from '@angular/material';
import { ContactListComponent } from './components/pages/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/pages/contact-detail/contact-detail.component';
import { NameInputComponentComponent } from './components/partials/name-input-component/name-input-component.component';
import { EmployeeListComponentComponent } from './components/partials/employee-list-component/employee-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    NameInputComponentComponent,
    EmployeeListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material Imports
    MatSliderModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

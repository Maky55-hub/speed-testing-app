import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable, from } from 'rxjs';
import { Contact, CreateFakeDataService } from './create-fake-data.service';


@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Contact> {

  constructor(private _createFakeDataService: CreateFakeDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contact | Observable<Contact> | Promise<Contact> {
    let id = route.params['id'];
    if (typeof id === 'string') {
      id = Number.parseInt(id);
    }
    const contact = this._createFakeDataService.contacts.filter(contact => contact.id === id)[0];
    // mock a call to backend
    const promise: Promise<Contact> = new Promise(resolve => {
      setTimeout(() => resolve(contact), 2000);
    });
    return from(promise);
  }
}

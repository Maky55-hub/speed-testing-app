import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Contact } from './create-fake-data.service';
import { AppConsts } from '../../shared/app-consts';


@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Contact> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Contact | Observable<Contact> | Promise<Contact> {
    const id = route.params['id'];
    const contact = AppConsts.contacts.filter(contact => contact.id === id)[0];
    return of(contact).pipe(delay(2000));
  }
}

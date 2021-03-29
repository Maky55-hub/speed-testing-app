import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as faker from 'faker/locale/en'

export interface Contact {
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: Date;
  address?: string;
  city?: string;
  salary?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CreateFakeDataService {

  private contacts: Array<Contact>;

  constructor() { 
    this.contacts = this._generateRandomContacts();
  }

  private _generateRandomContacts(): Array<Contact> {
    const randomContacts = faker.datatype.number(50);
    const contactsArray: Array<Contact> = [];
    for (let i = 0; i < randomContacts; i++) {
      contactsArray.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        dateOfBirth: faker.date.past(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        salary: faker.datatype.number(100)
      } as Contact)
    }
    return contactsArray;
  }

  public getRandomContacts(): Observable<Array<Contact>> {
    return of(this.contacts).pipe(delay(2000));
  }
}

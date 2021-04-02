import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as faker from 'faker/locale/en'

export interface Contact {
  id: number;
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

  private _contacts: Array<Contact>;

  public get contacts(): Array<Contact> {
    return this._contacts;
  }

  constructor() {
    this._contacts = this._generateRandomContacts();
  }

  private _generateRandomContacts(): Array<Contact> {
    const randomContacts = faker.datatype.number(50);
    const contactsArray: Array<Contact> = [];
    for (let i = 0; i < randomContacts; i++) {
      contactsArray.unshift({
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        dateOfBirth: faker.date.past(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        salary: faker.datatype.number(100)
      } as Contact);
    }
    return contactsArray;
  }

  public addNewContact(name: string): void {
    this._contacts.push({
      id: faker.datatype.number(),
      firstName: name,
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.past(),
      address: faker.address.streetAddress(),
      city: faker.address.cityName(),
      salary: faker.datatype.number(100)
    } as Contact);
  }

  public generateNewList(): Observable<Array<Contact>> {
    this._contacts = this._generateRandomContacts();
    return this.getRandomContacts();
  }

  public getRandomContacts(): Observable<Array<Contact>> {
    return of(this._contacts).pipe(delay(2000));
  }
}

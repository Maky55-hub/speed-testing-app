import { Component, OnInit } from '@angular/core';
import { Contact, CreateFakeDataService } from '../../../services/create-fake-data.service';
import { List } from 'immutable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

  public contacts: List<Contact>;

  constructor(private _createFakeDataService: CreateFakeDataService) { }

  private async _getContacts(): Promise<void> {
    const contacts = await this._createFakeDataService.getRandomContacts().toPromise();
    this.contacts = List(contacts);
  }

  ngOnInit() {
    this._getContacts();
  }

}

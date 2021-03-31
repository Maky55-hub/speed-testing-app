import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Contact } from '../../../services/create-fake-data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Array<Contact>; 

  constructor() { }

  ngOnInit() {
  }

}

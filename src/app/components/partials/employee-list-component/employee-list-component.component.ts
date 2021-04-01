import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Contact } from '../../../services/create-fake-data.service';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponentComponent implements OnInit {

  @Input() contacts: Array<Contact>;

  constructor() { }

  ngOnInit() {
  }

}

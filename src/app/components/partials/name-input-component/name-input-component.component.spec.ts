import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputComponentComponent } from './name-input-component.component';

describe('NameInputComponentComponent', () => {
  let component: NameInputComponentComponent;
  let fixture: ComponentFixture<NameInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

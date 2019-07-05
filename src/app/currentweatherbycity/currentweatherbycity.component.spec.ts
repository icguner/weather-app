import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentweatherbycityComponent } from './currentweatherbycity.component';

describe('CurrentweatherbycityComponent', () => {
  let component: CurrentweatherbycityComponent;
  let fixture: ComponentFixture<CurrentweatherbycityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentweatherbycityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentweatherbycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

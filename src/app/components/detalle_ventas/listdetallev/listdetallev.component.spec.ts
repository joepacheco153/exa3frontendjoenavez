import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetallevComponent } from './listdetallev.component';

describe('ListdetallevComponent', () => {
  let component: ListdetallevComponent;
  let fixture: ComponentFixture<ListdetallevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdetallevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetallevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

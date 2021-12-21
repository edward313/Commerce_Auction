import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCmpComponent } from './register.component';

describe('RegisterCmpComponent', () => {
  let component: RegisterCmpComponent;
  let fixture: ComponentFixture<RegisterCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

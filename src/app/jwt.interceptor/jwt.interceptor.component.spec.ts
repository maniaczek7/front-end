import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jwt.InterceptorComponent } from './jwt.interceptor.component';

describe('Jwt.InterceptorComponent', () => {
  let component: Jwt.InterceptorComponent;
  let fixture: ComponentFixture<Jwt.InterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jwt.InterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jwt.InterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

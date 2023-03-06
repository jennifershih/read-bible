import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiqaComponent } from './aiqa.component';

describe('AiqaComponent', () => {
  let component: AiqaComponent;
  let fixture: ComponentFixture<AiqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiqaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

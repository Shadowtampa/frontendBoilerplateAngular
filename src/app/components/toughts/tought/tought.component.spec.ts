import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToughtComponent } from './tought.component';

describe('ToughtComponent', () => {
  let component: ToughtComponent;
  let fixture: ComponentFixture<ToughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

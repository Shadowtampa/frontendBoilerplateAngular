import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToughtComponent } from './create-tought.component';

describe('CreateToughtComponent', () => {
  let component: CreateToughtComponent;
  let fixture: ComponentFixture<CreateToughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateToughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateToughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

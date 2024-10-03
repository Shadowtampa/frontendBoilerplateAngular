import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToughtComponent } from './edit-tought.component';

describe('EditToughtComponent', () => {
  let component: EditToughtComponent;
  let fixture: ComponentFixture<EditToughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditToughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditToughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToughtComponent } from './delete-tought.component';

describe('DeleteToughtComponent', () => {
  let component: DeleteToughtComponent;
  let fixture: ComponentFixture<DeleteToughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteToughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteToughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToughtsComponent } from './list-toughts.component';

describe('ListToughtsComponent', () => {
  let component: ListToughtsComponent;
  let fixture: ComponentFixture<ListToughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListToughtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListToughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

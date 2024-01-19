import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeleteComponent } from './editdelete.component';

describe('EditdeleteComponent', () => {
  let component: EditdeleteComponent;
  let fixture: ComponentFixture<EditdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

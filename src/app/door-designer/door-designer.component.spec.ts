import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorDesignerComponent } from './door-designer.component';

describe('DoorDesignerComponent', () => {
  let component: DoorDesignerComponent;
  let fixture: ComponentFixture<DoorDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorDesignerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

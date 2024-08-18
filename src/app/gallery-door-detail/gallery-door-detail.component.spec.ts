import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDoorDetailComponent } from './gallery-door-detail.component';

describe('GalleryDoorDetailComponent', () => {
  let component: GalleryDoorDetailComponent;
  let fixture: ComponentFixture<GalleryDoorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryDoorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryDoorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

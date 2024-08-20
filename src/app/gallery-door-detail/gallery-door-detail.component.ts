import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {Door} from "../models/Door";
import {DoorServiceService} from "../services/door-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-gallery-door-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './gallery-door-detail.component.html',
  styleUrl: './gallery-door-detail.component.css'
})
export class GalleryDoorDetailComponent {
  targetDoorId: number = 999;
  thisDoor: Door = new Door(999,'assets/gallery/sample1.jpg', ['black', 'modern', '30x80', 'Double Shaker'], 220, 'metal', 'black', 270, 'Shaker', 'Double Shaker - Modern Black');

  constructor(private doorService: DoorServiceService) { }

  ngOnInit():void {
    this.updateDoorDetails();
  }

  @Input()
  set id(doorId: string | number) {
    this.targetDoorId = Number(doorId);
    this.updateDoorDetails();
  }

  private updateDoorDetails(): void {
    const galleryImages = this.doorService.GetDoors();
    this.thisDoor = galleryImages.find(door => door.id === this.targetDoorId) || this.thisDoor;
  }
}

import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-gallery-door-detail',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './gallery-door-detail.component.html',
  styleUrl: './gallery-door-detail.component.css'
})
export class GalleryDoorDetailComponent {
  targetDoorImage = "";

  @Input()
  set id(doorId: string) {
    this.targetDoorImage = doorId;
  }
}

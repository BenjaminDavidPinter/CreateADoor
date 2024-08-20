import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Door} from "../models/Door"
import {DoorServiceService} from "../services/door-service.service";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  Title = "Prefab Gallery";
  Search = "";
  GalleryImages: Door[] = [];

  constructor(private doorService: DoorServiceService) { }

  ngOnInit():void {
    this.GalleryImages = this.doorService.GetDoors();
  }

  trackByItemTitle(index: number, item: Door): string {
    return item.style;
  }

  filteredSelection(): Door[] {
    const searchTags = this.Search.split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag.length > 0);

    if (this.Search === "") {
      return this.GalleryImages;
    } else {
      return this.GalleryImages.filter(image =>
        searchTags.every(tag => image.tags.map(t => t.toLowerCase()).includes(tag))
      );
    }
  }
}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  Title = "Prefab Gallery";
  Search = "";

  GalleryImages = [
    {imgSrc: 'assets/gallery/sample1.jpg', title: "Image1", tags: "white, games"},
    {imgSrc: 'assets/gallery/sample2.jpg', title: "Image2", tags: "white, games"},
    {imgSrc: 'assets/gallery/sample3.jpg', title: "Image3", tags: "white, games"},
    {imgSrc: 'assets/gallery/sample4.jpg', title: "Image4", tags: "white, games"},
    {imgSrc: 'assets/gallery/sample5.jpg', title: "Image5", tags: "blue, games"},
    {imgSrc: 'assets/gallery/sample6.jpg', title: "Image6", tags: "blue, games"},
    {imgSrc: 'assets/gallery/sample7.jpg', title: "Image7", tags: "blue, sports"},
    {imgSrc: 'assets/gallery/sample9.jpg', title: "Image9", tags: "blue, sports"},
    {imgSrc: 'assets/gallery/sample10.jpg', title: "Image10", tags: "blue, sports"},
    {imgSrc: 'assets/gallery/sample11.jpg', title: "Image11", tags: "white, sports"},
    {imgSrc: 'assets/gallery/sample8.jpg', title: "Image8", tags: "white, sports"},
    {imgSrc: 'assets/gallery/sample12.png', title: "Image12", tags: "white, sports"},
  ];

  trackByItemTitle(index: number, item: { title: string }): string {
    return item.title;
  }

  filteredSelection() {
    return this.GalleryImages.filter((image) => image.tags.includes(this.Search))
  }
}

import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  Title = "Prefab Gallery";

  GalleryImages = [
    {imgSrc: 'assets/gallery/sample1.jpg', title: "Image1"},
    {imgSrc: 'assets/gallery/sample2.jpg', title: "Image2"},
    {imgSrc: 'assets/gallery/sample3.jpg', title: "Image3"},
    {imgSrc: 'assets/gallery/sample4.jpg', title: "Image4"},
    {imgSrc: 'assets/gallery/sample5.jpg', title: "Image5"},
    {imgSrc: 'assets/gallery/sample6.jpg', title: "Image6"},
    {imgSrc: 'assets/gallery/sample7.jpg', title: "Image7"},
    {imgSrc: 'assets/gallery/sample9.jpg', title: "Image9"},
    {imgSrc: 'assets/gallery/sample10.jpg', title: "Image10"},
    {imgSrc: 'assets/gallery/sample11.jpg', title: "Image11"},
    {imgSrc: 'assets/gallery/sample8.jpg', title: "Image8"},
    {imgSrc: 'assets/gallery/sample12.png', title: "Image12"},
  ];

  trackByItemTitle(index: number, item: { title: string }): string {
    return item.title;
  }
}

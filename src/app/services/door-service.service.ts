import { Injectable } from '@angular/core';
import {Door} from "../models/Door";

@Injectable({
  providedIn: 'root'
})
export class DoorServiceService {

  constructor() { }

  GetDoors() : Door[] {
    return [
      new Door(1,'assets/gallery/sample1.jpg', ['black', 'modern', '30x80', 'Double Shaker'], 220, 'metal', 'black', 270, 'Shaker', 'Double Shaker - Modern Black'),
      new Door(2,'assets/gallery/sample2.jpg', ['white', 'minimalist', '28x80', 'Panel'], 195, 'wood', 'white', 245, 'Shaker','Panel - Minimalist White'),
      new Door(3,'assets/gallery/sample3.jpg', ['brown', 'vintage', '30x80', 'French'], 230, 'wood', 'brown', 280, 'Shaker','French - Vintage Brown'),
      new Door(4,'assets/gallery/sample4.jpg', ['blue', 'classic', '32x80', 'Barn'], 250, 'wood', 'blue', 300, 'Shaker','Barn - Classic Blue'),
      new Door(5,'assets/gallery/sample5.jpg', ['gray', 'contemporary', '32x80', 'Bi-fold'], 270, 'composite', 'gray', 320, 'Shaker','Bi-fold - Contemporary Gray'),
      new Door(6,'assets/gallery/sample6.jpg', ['white', 'rustic', '30x80', 'Craftsman'], 210, 'wood', 'white', 260, 'Shaker','Craftsman - Rustic White'),
      new Door(7,'assets/gallery/sample7.jpg', ['green', 'traditional', '32x80', 'Shaker'], 240, 'wood', 'green', 290, 'Shaker','Shaker - Traditional Green'),
      new Door(8,'assets/gallery/sample8.jpg', ['red', 'modern', '28x80', 'Sliding'], 200, 'glass', 'red', 240, 'Shaker','Sliding - Modern Red'),
      new Door(9,'assets/gallery/sample9.jpg', ['blue', 'vintage', '30x80', 'Dutch'], 225, 'wood', 'blue', 265, 'Shaker','Dutch - Vintage Blue'),
      new Door(10,'assets/gallery/sample10.jpg', ['black', 'contemporary', '32x80', 'Double Shaker'], 280, 'metal', 'black', 320, 'Shaker','Double Shaker - Contemporary Black'),
      new Door(11,'assets/gallery/sample11.jpg', ['white', 'classic', '28x80', 'French'], 200, 'wood', 'white', 240, 'Shaker','French - Classic White'),
      new Door(12,'assets/gallery/sample12.png', ['green', 'rustic', '32x80', 'Barn'], 250, 'wood', 'green', 300, 'Shaker','Barn - Rustic Green'),
    ];
  }
}

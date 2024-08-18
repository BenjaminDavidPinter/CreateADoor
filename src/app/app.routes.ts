import { Routes } from '@angular/router';

import {DoorDesignerComponent} from './door-designer/door-designer.component'
import {ContactUsComponent} from './contact-us/contact-us.component'
import {AboutUsComponent} from './about-us/about-us.component'
import {GalleryComponent} from './gallery/gallery.component'
import {GalleryDoorDetailComponent} from "./gallery-door-detail/gallery-door-detail.component";

export const routes: Routes = [
  { path: 'door-designer', component: DoorDesignerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery-door-detail/:id', component: GalleryDoorDetailComponent },
];

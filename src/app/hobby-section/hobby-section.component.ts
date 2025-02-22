import { Component } from '@angular/core';
import { ModelViewerComponent } from '../model-viewer/model-viewer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobby-section',
  standalone: true,
  imports: [ModelViewerComponent, CommonModule],
  templateUrl: './hobby-section.component.html',
  styleUrl: './hobby-section.component.scss'
})
export class HobbySectionComponent {
  modelFiles = [
    { name: 'Headphone Holder', path: 'assets/headphoneholder.stl' },
    { name: 'Towel Holder', path: 'assets/towelholder.stl' },]
}

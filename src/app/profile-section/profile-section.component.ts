import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss'
})
export class ProfileSectionComponent {
  @Input() isDarkMode: boolean = false;
  profileImage = 'assets/Profile.jpg';
}

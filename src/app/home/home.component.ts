import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ProfileSectionComponent } from '../profile-section/profile-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import {MatDividerModule} from '@angular/material/divider';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { HobbySectionComponent } from '../hobby-section/hobby-section.component';
import { AchievementsComponent } from '../achievements/achievements.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, ProfileSectionComponent, ExperienceSectionComponent, SkillsSectionComponent , HobbySectionComponent, AchievementsComponent, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDarkMode: boolean = false

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }
}

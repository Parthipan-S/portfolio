import { Component } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
  iconRegistry.addSvgIcon(
    'angularjs',
    sanitizer.bypassSecurityTrustResourceUrl('assets/angularjs.svg'));
    iconRegistry.addSvgIcon(
    'html',
    sanitizer.bypassSecurityTrustResourceUrl('assets/html5.svg'));
    iconRegistry.addSvgIcon(
    'css',
    sanitizer.bypassSecurityTrustResourceUrl('assets/css3.svg'));
    iconRegistry.addSvgIcon(
    'typescript',
    sanitizer.bypassSecurityTrustResourceUrl('assets/typescript.svg'));
    iconRegistry.addSvgIcon(
    'javascript',
    sanitizer.bypassSecurityTrustResourceUrl('assets/javascript.svg'));
}
}

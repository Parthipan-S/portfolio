import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent {
  @Input() isDarkMode = false;
  @Output() toggleTheme = new EventEmitter<void>();
  profileImage = "assets/logo.jpeg";

  toggleAppTheme() {
    this.toggleTheme.emit();
  }
}

import { Component, OnInit } from "@angular/core";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SectionsComponent } from "../sections/sections.component";
import { MatDividerModule } from "@angular/material/divider";
import { ContactComponent } from "../contact/contact.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    NavBarComponent,
    SectionsComponent,
    MatDividerModule,
    ContactComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isDarkMode: boolean = true;

  ngOnInit() {
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  }
}

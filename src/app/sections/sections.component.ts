import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { ProductListComponent } from "./product-list/product-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
@Component({
  selector: "app-sections",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDivider],
  templateUrl: "./sections.component.html",
  styleUrls: ["./sections.component.scss"],
})
export class SectionsComponent {
  constructor(private matdialog: MatDialog) {}
  homeVideo = "assets/Video Project.mp4";
  productVideo = "assets/productV1.mp4";
  productVideo2 = "assets/productV2.mp4";
  productVideo3 = "assets/productV3.mp4";
  productVideo4 = "assets/productV4.mp4";
  productVideo5 = "assets/productV5.mp4";
  socialLinks = {
    instagram: "https://www.instagram.com/altaj_shoes/",
    whatsapp: "https://wa.me/919943648228",
    facebook: "https://www.facebook.com/altajshoes1",
  };
  @ViewChild("homeVid") homeVideoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild("productVid") productVideoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild("productVid2") productVideoElement2!: ElementRef<HTMLVideoElement>;
  @ViewChild("productVid3") productVideoElement3!: ElementRef<HTMLVideoElement>;
  @ViewChild("productVid4") productVideoElement4!: ElementRef<HTMLVideoElement>;
  @ViewChild("productVid5") productVideoElement5!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const videos: HTMLVideoElement[] = [
      this.homeVideoElement.nativeElement,
      this.productVideoElement.nativeElement,
      this.productVideoElement2.nativeElement,
      this.productVideoElement3.nativeElement,
      this.productVideoElement4.nativeElement,
      this.productVideoElement5.nativeElement,
    ];

    videos.forEach((vid) => {
      vid.muted = true;
      vid.playsInline = true;
      vid.preload = "metadata";

      const playWhenReady = () => {
        if (vid.readyState >= 3) {
          vid.play().catch(() => {});
          vid.removeEventListener("canplay", playWhenReady);
        }
      };

      vid.addEventListener("canplay", playWhenReady);
    });
  }
  openProducts(productList: string): void {
    this.matdialog.open(ProductListComponent, {
      width: "80%",
      height: "75%",
      data: { productList },
      backdropClass: "custom-backdrop",
      panelClass: "custom-dialog-panel",
    });
  }

  orderOnWhatsapp(productName: string): void {
    const message = `Hi 👋 I’m interested in this handbag.
Is this available for same-day delivery in Madurai? ${productName}`;

    const whatsappUrl = `${this.socialLinks.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
    console.log("Opening WhatsApp URL:", whatsappUrl);
    window.open(whatsappUrl, "_blank");
  }
}

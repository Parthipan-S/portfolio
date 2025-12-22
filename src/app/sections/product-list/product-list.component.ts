import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-product-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit {
  productList!: string;
  images = [
    "assets/productList1/product1Img1.jpeg",
    "assets/productList1/product1Img2.jpeg",
    "assets/productList1/product1Img3.jpeg",
    "assets/productList1/product1Img4.jpeg",
    "assets/productList1/product1Img5.jpeg",
  ];

  currentIndex = 0;

  // Touch handling
  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 50; // px

  constructor(
    private dialogRef: MatDialogRef<ProductListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productList: string }
  ) {
    this.productList = data.productList;
  }

  ngOnInit() {
    this.images = [
      `assets/${this.productList}/01.jpg`,
      `assets/${this.productList}/02.jpg`,
      `assets/${this.productList}/03.jpg`,
      `assets/${this.productList}/04.jpg`,
      `assets/${this.productList}/05.jpg`,
    ];
    this.preloadAllImages();
  }
  preloadAllImages(): void {
    this.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd(): void {
    const deltaX = this.touchStartX - this.touchEndX;

    if (Math.abs(deltaX) > this.swipeThreshold) {
      if (deltaX > 0) {
        this.next(); // swipe left → next image
      } else {
        this.prev(); // swipe right → previous image
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

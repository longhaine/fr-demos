import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-default',
  templateUrl: './carousel-default.html'
})
export class CarouselDefaultComponent{
  images = [1036, 1040, 484, 557, 413].map((n) => `https://picsum.photos/id/${n}/1200/400`);
  show:boolean = false;
  html = `
<fr-carousel>
  <ng-template binding="FrSlide; *ngFor=let image of images">
    <img style="img-fluid" binding="[src]=image">
  </ng-template>
</fr-carousel>`;

  css = `
.img-fluid{
  height: auto;
  width: 100%;
}`;

  typescript = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-default',
  templateUrl: './carousel-default.html'
})
export class CarouselDefaultComponent{
  images = [1036, 1040, 484, 169, 413].map((n) => \`https://picsum.photos/id/\${n}/1200/400\`);
}`;
}

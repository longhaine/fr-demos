import { Component } from '@angular/core';
import { FrCarouselConfig } from 'fr-carousel';
@Component({
  selector: 'app-carousel-config',
  templateUrl: './carousel-config.html',
  providers: [FrCarouselConfig] // add FrCarouselConfig to the component providers
})
export class CarouselConfigComponent{
  images = [1036, 1040, 484, 557, 413].map((n) => `https://picsum.photos/id/${n}/1200/400`);
  show:boolean = false;
  constructor(config: FrCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 8000;
    config.showNavigationArrows = false;
    config.pauseOnHover = false;
  }
  html = `
<fr-carousel>
  <ng-template binding="FrSlide; *ngFor=let image of images">
    <img class="img-fluid" binding="[src]=image">
  </ng-template>
</fr-carousel>`;

  css = `
.img-fluid{
  height: auto;
  width: 100%;
}`;

  typescript=`
import { Component } from '@angular/core';
import { FrCarouselConfig } from 'fr-carousel';
@Component({
  selector: 'app-carousel-config',
  templateUrl: './carousel-config.html',
  providers: [FrCarouselConfig] // add FrCarouselConfig to the component providers
})
export class CarouselConfigComponent{
  images = [1036, 1040, 484, 557, 413].map((n) => \`https://picsum.photos/id/\${n}/1200/400\`);
  
  constructor(config: FrCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 8000;
    config.showNavigationArrows = false;
    config.pauseOnHover = false;
  }
}`;

}

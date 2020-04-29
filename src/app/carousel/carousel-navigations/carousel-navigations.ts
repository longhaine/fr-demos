import { Component, ViewChild } from '@angular/core';
import { FrCarousel } from 'fr-carousel';

@Component({
  selector: 'app-carousel-navigations',
  templateUrl: './carousel-navigations.html'
})
export class CarouselNavigationsComponent{
  images = [1036, 1040, 484, 557, 413].map((n) => `https://picsum.photos/id/${n}/1200/400`);
  show:boolean = false;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  pauseOnHover = true;
  pause = false;
  interval = 2000;
  @ViewChild('carousel', {static : true}) carousel: FrCarousel;

  togglePause(){
    if(this.pause){
      this.carousel.cycle();
    }
    else{
      this.carousel.pause();
    }
    this.pause = !this.pause;
  }
  prev(){
    this.carousel.prev();
  }
  next(){
    this.carousel.next();
  }
  html=`
<fr-carousel binding="#carousel; [interval]=interval; [pauseOnHover]=pauseOnHover; [showNavigationArrows]=showNavigationArrows; [showNavigationIndicators]=showNavigationIndicators">
  <ng-template binding="FrSlide; *ngFor=let image of images">
    <img class="img-fluid" binding="[src]=image">
  </ng-template>
</fr-carousel>
<div class="control">
  <input type="checkbox" binding="[(ngModel)]=showNavigationArrows">
  <span>Toggle navigation arrows</span>
</div>
<div class="control">
  <input type="checkbox" binding="[(ngModel)]=showNavigationIndicators">
  <span>Toggle navigation indicators</span>
</div>
<div class="control">
  <input type="checkbox" binding="[(ngModel)]=pauseOnHover">
  <span>Pause on hover</span>
</div>
<div class="control">
  <span>Interval: </span>
  <input type="number" binding="[(ngModel)]=interval">
  <p class="note">Note: if the value is less than 500 then it will be set as 500.</p>
</div>
<div class="control">
  <button binding="(click)=prev()">Prev</button>
  <button binding="(click)=next()">Next</button>
  <button binding="(click)=togglePause(); [innerText]=!pause ? 'Pause' : 'Cycle'"></button>
</div>`;

  css = `
.img-fluid{
  height: auto;
  width: 100%;
}
.control{
  margin-bottom: 10px;
}
.control input[type="checkbox"]{
  transform: scale(1.5);
}
.control span{
  font-size:20px;
}
.note{
  color: #ff3333;
}`

  typescript = `
import { Component, ViewChild } from '@angular/core';
import { FrCarousel } from 'fr-carousel';

@Component({
  selector: 'app-carousel-navigations',
  templateUrl: './carousel-navigations.html'
})
export class CarouselNavigationsComponent{
  images = [1036, 1040, 484, 557, 413].map((n) => \`https://picsum.photos/id/\${n}/1200/400\`);
  showNavigationArrows = false;
  showNavigationIndicators = false;
  pauseOnHover = true;
  pause = false;
  interval = 2000;
  @ViewChild('carousel', {static : true}) carousel: FrCarousel;
  
  togglePause(){
    if (this.pause) {
      this.carousel.cycle();
    }
    else {
      this.carousel.pause();
    }
    this.pause = !this.pause;
  }
  prev(){
    this.carousel.prev();
  }
  next(){
    this.carousel.next();
  }
}`;
}

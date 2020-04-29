import { Component} from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
  smoothScroll(idSection:string){
    let section = document.getElementById(idSection);
    if(section != null){
      section.scrollIntoView({behavior:"smooth",block:"start"});
      section.classList.add("lumos-maxima");
      setTimeout(()=>{
        section.classList.remove("lumos-maxima");
      },2000);
    }
  }
}

import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GithubService } from './service/github.service';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stars = 0;
  constructor(private title:Title,private router:Router,private githubService:GithubService){
    this.title.setTitle("fr-carousel demos");
  }
  ngAfterViewInit(){
    this.router.events.subscribe(ev=>{
      if(ev instanceof NavigationEnd){
        // let repo = ev.url;
        // if(repo == "/"){
        //   repo = "/fr-carousel";
        // }
        let repo = "/fr-carousel"
        this.getStars(repo);
      }
    });
  }
  getStars(repo:string){
    this.githubService.githubStats(repo).subscribe(res=>{
      this.stars = JSON.parse(JSON.stringify(res.body)).stargazers_count;
    });
  }
}

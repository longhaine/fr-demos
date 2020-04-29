import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private httpClient: HttpClient) { }
  private api = 'https://api.github.com/repos/longhaine';
  githubStats(repo:string){
    return this.httpClient.get(this.api+repo,{observe: 'response'});
  }
}

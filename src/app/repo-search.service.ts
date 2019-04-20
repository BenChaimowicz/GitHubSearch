import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from './repository.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  private path = 'https://api.github.com/search/repositories?q=';
  searchResults: Repository[];

  constructor(private http: HttpClient) {
    this.searchResults = [];
   }

  public getRepos(search: string) {
    return this.http.get(this.path + search);
  }
}

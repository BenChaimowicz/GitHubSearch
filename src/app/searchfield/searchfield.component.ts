import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository.interface';
import { RepoSearchService } from '../repo-search.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {

  searchResults: any[];
  searchString: string;
  isLoaded: boolean;

  constructor(private searchService: RepoSearchService) {
    this.searchResults = [];
    this.isLoaded = false;
  }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.searchString);
    this.searchService.getRepos(this.searchString).subscribe(repos => { this.searchResults = repos['items']; },
      error => { console.log(error); },
      () => { console.log('Request Complete'); this.isLoaded = true; console.log(this.searchResults); });
  }

}

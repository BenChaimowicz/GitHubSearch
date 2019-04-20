import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository.interface';
import { RepoSearchService } from '../repo-search.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {

  searchResults: Repository[];
  searchString: string;

  constructor(private searchService: RepoSearchService) {
    this.searchResults = [];
  }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.searchString);
    this.searchService.getRepos(this.searchString).subscribe(repos => this.searchResults = repos);
  }
}

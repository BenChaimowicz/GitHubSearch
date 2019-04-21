import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository.interface';
import { RepoSearchService } from '../repo-search.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {

  searchResults: any[];
  searchString: string;
  isLoaded: boolean;

  length: number;
  pageSize = 30;
  pageSizeOptions = [30];

  pageEvent: PageEvent;

  constructor(private searchService: RepoSearchService) {
    this.searchResults = [];
    this.isLoaded = false;
  }

  ngOnInit() {
  }

  onSearch() {
    console.log(this.searchString);
    this.searchService.getRepos(this.searchString).subscribe(l => { this.length = l['total_count']; });
    this.searchService.getRepos(this.searchString).subscribe(repos => { this.searchResults = repos['items']; },
      error => { console.log(error); },
      () => {
        console.log('Request Complete');
        this.isLoaded = true; console.log(this.searchResults);
        console.log(this.searchResults[0].name + this.searchResults[0].owner.avatar_url);
      });
  }

  onPage(e: PageEvent) {
    console.log(this.searchString + '&page=' + e.pageIndex + 1);
    if (e.pageIndex > 0) {
      this.searchService.getRepos(this.searchString + '&page=' + (e.pageIndex + 1))
        .subscribe(repos => { this.searchResults = repos['items']; });
    } else { this.onSearch(); }
  }
}

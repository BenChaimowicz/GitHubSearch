import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-tile',
  templateUrl: './repo-tile.component.html',
  styleUrls: ['./repo-tile.component.css']
})
export class RepoTileComponent implements OnInit {

  repoID: number;
  repoName: string;
  repoAvatar: string;
  repoBookmarked: boolean;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-tile',
  templateUrl: './repo-tile.component.html',
  styleUrls: ['./repo-tile.component.css']
})
export class RepoTileComponent implements OnInit {

  @Input() repoID: number;
  @Input() repoName: string;
  @Input() repoAvatar: string;
  repoBookmarked: boolean;

  constructor() { }

  ngOnInit() {
  }

}

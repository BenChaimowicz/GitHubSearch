import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoSearchService } from './repo-search.service';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RepoGalleryComponent } from './repo-gallery/repo-gallery.component';
import { RepoTileComponent } from './repo-tile/repo-tile.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SearchfieldComponent,
    RepoGalleryComponent,
    RepoTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [RepoSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

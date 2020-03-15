import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.less']
})

export class BookmarksComponent implements OnInit {

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.data.writeBookmark(this.data.urlVideo);
  }

  recoverItem(url: String){
    this.data.urlVideo = url;
  }

}

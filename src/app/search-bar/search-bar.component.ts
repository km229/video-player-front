import { Component, OnInit, Output, Input, Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})

export class SearchBarComponent implements OnInit {

  @Input() urlVideo: String;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
  }
  
  send(): void {
    this.data.writeHistory(this.urlVideo);
    this.data.urlVideo = this.urlVideo;
  }

}

import { Component, OnInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})

export class HistoryComponent implements OnInit {

  constructor(public data: DataService) {
  }

  ngOnInit(): void { }

  recoverUrl(url: String){
    this.data.urlVideo = url;
  }

}
import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.less']
})
export class VideoViewComponent implements OnInit {

  @Input() url: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  urlVideo(){
    let regex: RegExp = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/;
    let res = regex.exec(this.url);
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+res[1]);
  }

}

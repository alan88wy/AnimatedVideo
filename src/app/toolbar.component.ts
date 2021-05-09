import { Component, Input } from '@angular/core';
import { VideoService } from './video.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'video-toolbar',
  template: `
    <div id="playerToolBar" [@hiddenChanged]="isHidden">
      <a
        id="playBtn"
        class="btn btn-default"
        (click)="videoService.playVideo()"
      >
        <i
          [ngClass]="{
            'fa-play': !videoService.isPlaying,
            'fa-pause': videoService.isPlaying
          }"
          class="fa"
        ></i>
      </a>
      <a
        id="muteBtn"
        class="btn btn-default"
        (click)="videoService.muteVideo()"
      >
        <i
          [ngClass]="{
            'fa-volume-off': videoService.isMuted,
            'fa-volume-up': !videoService.isMuted
          }"
          class="fa"
        ></i>
      </a>
      <span id="videoTime"
        >{{ videoService.currentTime }} / {{ videoService.totalTime }}</span
      >
      <a
        id="fsBtn"
        class="btn btn-default pull-right"
        (click)="videoService.fullScreen()"
      >
        <i class="fa fa-expand"></i>
      </a>
      <a
        id="detailsBtn"
        class="btn btn-default pull-right"
        (click)="videoService.details()"
      >
        <i class="fa fa-bars"></i>
      </a>
    </div>
  `,
  animations: [
    trigger('hiddenChanged', [
      state(
        'true',
        style({
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          opacity: 0,
        })
      ),
      transition('false => true', animate('100ms ease-out')),
      transition('true -> false', animate('400ms ease-in')),
    ]),
  ],
})
export class ToolbarComponent {
  constructor(public videoService: VideoService) {}
  @Input() isHidden: string = 'true';
}

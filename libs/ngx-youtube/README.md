# ngx-youtube

Angular Library to play youtube bakground video.

## Compatibility

* Angular 16.x
* Chrome
* Edge
* Firefox

## Accessibility

This component is a11y friendly. It respect reduced motion option from browser setting and include toggle button to
play/pause the video.

## Installation

```
npm install --save @ngx-yanis/ngx-youtube
```

Then import module in your project:

```
import { NgxYoutubeModule } from '@ngx-yanis/ngx-youtube';

@NgModule({
  imports: [
    ...
    NgxYoutubeModule
  ]
})
export class AppModule { }
```

## Usage

```
<ngx-youtube-player [youtubeId]="'Bc_RrCNWTyo'" (readyChange)="onReadyChange($event)">
  <img class="cover" [ngClass]="{hide: isReady}" src="https://i.ytimg.com/vi/Bc_RrCNWTyo/maxresdefault.jpg" alt="">
</ngx-youtube-player>

@Component()
export class NgxYoutubeDemoComponent {
  isRead = false;

  onReadyChange($event: boolean) {
    this.isRead = $event;
  }
}
```

## Available Input/Output

```
<ngx-youtube-player [youtubeId]="youtubeId">
```

You can know when play is play or pause by binding following output.

```
<ngx-youtube-player (playingChange)="onPlayingChange($event)">
```

Because load youtube iframe can take time, you have a Mechanism to display overlay when play is not ready yet.
First you can use following output to know if player is ready.

```
<ngx-youtube-player (readyChange)="onReadyChange($event)">
```

And use `cover` class to mark element to interpolate as cover.

```
<img class="cover" [ngClass]="{hide: isReady}" src="https://i.ytimg.com/vi/Bc_RrCNWTyo/maxresdefault.jpg" alt="">
```

## General Information

This library is powered by [Nx](https://nx.dev/angular). Source are available
on [Github](https://github.com/yanis-git/ngx-yanis/tree/main/libs/ngx-youtube).

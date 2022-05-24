import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-youtube-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .intro {
      padding: 20px 0;
      width: 720px;
      margin: -40px auto 0;
      position: relative;
      z-index: 20;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
  template: `
    <section class="intro">
      <h1>Angular Library to play background youtube video</h1>
    </section>
    <section class="innerContainer">
      <h2>Introduction</h2>
      <p><code>ngx-youtube</code> is an angular library that makes it easy to use youtube embed to play a background
        video. It has a
        simple and clean api which makes it very user friendly.</p>
      <p><code>ngx-youtube</code> also provides some great features such as display cover video is ready to be played.
      </p>
      <p>This library is perfect for anyone who wants to add a little extra flair to their website by adding a
        background youtube video.</p>
      <p>Also this library respect accessibility criteria by respecting <code>prefers-reduced-motion</code> browser
        option and give possible to stop this video.</p>
    </section>
  `
})
export class NgxYoutubeIntroComponent {

}

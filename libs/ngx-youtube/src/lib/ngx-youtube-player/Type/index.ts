// mock YT PlayerState, more information on https://www.youtube.com/iframe_api

// export declare const YT: { PlayerState: { BUFFERING: number, CUED: number, ENDED: number, PAUSED: number, PLAYING: number, UNSTARTED: number } };


export enum PlayerState {
  BUFFERING = 3,
  CUED = 5,
  ENDED = 0,
  PAUSED = 2,
  PLAYING = 1,
  UNSTARTED = -1
}

export const defaultPlayerVars = {
  color: "white",
  iv_load_policy: 3,
  rel: 0,
  playsinline: 1,
  autoplay: 0,
  controls: 0,
  showinfo: 0,
  widget: 1,
  modestbranding: 1,
  loop: 1,
  mute: 1,
};

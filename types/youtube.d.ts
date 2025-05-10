interface Window {
  YT: {
    Player: new (
      elementId: string,
      options: {
        videoId: string
        playerVars?: {
          autoplay?: number
          controls?: number
          disablekb?: number
          fs?: number
          rel?: number
          modestbranding?: number
          showinfo?: number
          mute?: number
          loop?: number
          playlist?: string
        }
        events?: {
          onReady?: (event: any) => void
          onStateChange?: (event: any) => void
          onError?: (event: any) => void
        }
      },
    ) => YT.Player
    PlayerState: {
      UNSTARTED: number
      ENDED: number
      PLAYING: number
      PAUSED: number
      BUFFERING: number
      CUED: number
    }
  }
  onYouTubeIframeAPIReady: () => void
}

declare namespace YT {
  interface Player {
    playVideo(): void
    pauseVideo(): void
    mute(): void
    unMute(): void
    isMuted(): boolean
    getPlayerState(): number
    destroy(): void
  }
}

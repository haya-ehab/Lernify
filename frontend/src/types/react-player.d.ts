declare module "react-player" {
  import { Component } from "react"

  export interface ReactPlayerProps {
    url?: string | string[]
    playing?: boolean
    loop?: boolean
    controls?: boolean
    volume?: number
    muted?: boolean
    width?: string | number
    height?: string | number
    className?: string
    onPlay?: () => void
    onPause?: () => void
    onEnded?: () => void
    onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void
  }

  export default class ReactPlayer extends Component<ReactPlayerProps> {}
}
declare module "react-player" {
  import { Component } from "react"

  export interface ReactPlayerProps {
    url?: string | string[]
    playing?: boolean
    loop?: boolean
    controls?: boolean
    volume?: number
    muted?: boolean
    width?: string | number
    height?: string | number
    className?: string
    onPlay?: () => void
    onPause?: () => void
    onEnded?: () => void
    onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void
  }

  export default class ReactPlayer extends Component<ReactPlayerProps> {}
}

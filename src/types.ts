export interface Props {
  items: Viewable[]
  selected?: number
  close?: () => void
}

export type Uri = string | Promise<string>

export interface ViewableBase {
  uri: Uri | (() => Uri)
  id: string
  filename?: string
  title?: string
  description?: string
}

// Event types
export interface LightboxCloseEvent extends CustomEvent {
  type: 'close'
}

// Specific viewable types
export interface Image extends ViewableBase {
  type: 'image'
  alt?: string
}

export interface Pdf extends ViewableBase {
  type: 'pdf'
}

export interface Code extends ViewableBase {
  type: 'code'
  language?: string
}

export interface Video extends ViewableBase {
  type: 'video'
  autoplay?: boolean
  controls?: boolean
  muted?: boolean
  poster?: string
}

export interface Iframe extends ViewableBase {
  type: 'iframe'
  width?: string
  height?: string
  sandbox?:
    | 'allow-forms'
    | 'allow-modals'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-popups-to-escape-sandbox'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-top-navigation'
  allowfullscreen?: boolean
}

export type Viewable = Image | Pdf | Code | Video | Iframe

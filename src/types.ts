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

export type Viewable = Image | Pdf | Code

import { html, component } from '@pionjs/pion'
import styles from './lightbox.css'
import type { Viewable, Props } from './types'
import useLightbox from './hooks/useLightbox'
import { clearIcon } from './components/icons'

const Lightbox = (props: Props) => {
  const { slide, close } = useLightbox(props)

  return html`
    <style>
      ${styles}
    </style>

    <cosmoz-slider .slide=${slide}></cosmoz-slider>

    <button class="close" @click=${close} aria-label="Close lightbox">
      ${clearIcon()}
    </button>
  `
}

// Define the custom element
customElements.define('pion-lightbox', component<Props>(Lightbox))

// Utility function to determine viewable type from filename
export const viewableType = (filename: string): Viewable['type'] | null => {
  const ext = filename.split('.').pop()?.toLowerCase()

  if (ext === 'pdf') return 'pdf'
  if (
    ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp', 'tiff'].includes(ext!)
  )
    return 'image'
  if (
    [
      'xml',
      'json',
      'js',
      'ts',
      'html',
      'css',
      'txt',
      'md',
      'py',
      'java',
      'cpp',
      'c',
      'php',
      'rb',
      'go',
      'rs',
      'swift'
    ].includes(ext!)
  )
    return 'code'
  // Default to 'image' or another valid Viewable['type'] value
  return null
}

// Factory function to create a lightbox instance
export const lightbox = (props: Props) =>
  html`<pion-lightbox
    .items=${props.items}
    .selected=${props.selected}
    .close=${props.close}
  ></pion-lightbox>`

// Export types for external use
export type { Viewable, Image, Pdf, Code } from './types'
export type LightboxProps = Props

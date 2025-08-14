import { html, component } from '@pionjs/pion'
import styles from './lightbox.css'
import type { Viewable, Props } from './types'
import useLightbox from './hooks/useLightbox'
import { clearIcon } from './components/icons'

const Lightbox = function (this: HTMLElement, props: Props) {
  const { slide, close } = useLightbox(props, this)

  return html`
    <cosmoz-slider .slide=${slide}></cosmoz-slider>

    <button class="close" @click=${close} aria-label="Close lightbox">
      ${clearIcon()}
    </button>
  `
}

customElements.define(
  'pion-lightbox',
  component<Props>(Lightbox, { styleSheets: [styles] })
)

// Utility function to determine viewable type from filename
export const viewableType = (filename: string): Viewable['type'] => {
  const ext = filename.split('.').pop()?.toLowerCase()

  if (!ext) return 'iframe'

  if (ext === 'pdf') return 'pdf'
  if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'bmp', 'tiff'].includes(ext))
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
  if (['mp4', 'webm', 'ogg', 'mov', 'avi', 'mkv', 'wmv', 'flv'].includes(ext))
    return 'video'

  return 'iframe' // Default to iframe for unknown types
}

export const lightbox = (props: Props) =>
  html`<pion-lightbox
    .items=${props.items}
    .selected=${props.selected}
  ></pion-lightbox>`

export type { Viewable, Image, Pdf, Code } from './types'
export type LightboxProps = Props

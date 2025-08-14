import { html } from 'lit-html'
import { until } from 'lit-html/directives/until.js'
import { Image } from '../types'
import { loaded$, uri$ } from '../util'

export const image = (i: Image) => {
  const uri = uri$(i.uri)

  return html`
    <img
      class="viewable image"
      src=${until(uri)}
      alt=${i.alt || i.title || i.filename || 'Image'}
      ?data-loaded=${loaded$(uri)}
      @load=${() => console.log('Image loaded:', i.id)}
      @error=${() => console.error('Image failed to load:', i.id)}
    />
  `
}

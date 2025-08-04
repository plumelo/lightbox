import { html } from 'lit-html'
import { until } from 'lit-html/directives/until.js'
import { ifDefined } from 'lit-html/directives/if-defined.js'
import { Iframe } from '../types'
import { loaded$, uri$ } from '../util'

export const iframe = (i: Iframe) => {
  const uri = uri$(i.uri)
  const { width = '100%', height = '100%', sandbox, allowfullscreen = true } = i

  return html`
    <iframe
      class="viewable iframe"
      src=${until(uri)}
      width=${width}
      height=${height}
      sandbox=${ifDefined(sandbox)}
      ?allowfullscreen=${allowfullscreen}
      ?data-loaded=${loaded$(uri)}
      @load=${() => console.log('Iframe loaded:', i.id)}
      @error=${() => console.error('Iframe failed to load:', i.id)}
    >
      Your browser does not support iframes.
    </iframe>
  `
}

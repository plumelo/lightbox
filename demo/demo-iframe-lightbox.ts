import { html, component } from '@pionjs/pion'
import '../src/index.ts'
import type { Viewable } from '../src/index.js'

export const IframeDemo = () => {
  const iframeItems: Viewable[] = [
    {
      id: '1',
      type: 'iframe',
      uri: 'https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-0.05,51.52',
      filename: 'map.html',
      title: 'Interactive Map',
      width: '80vw',
      height: '70vh'
    },
    {
      id: '2',
      type: 'iframe',
      uri: 'https://www.openstreetmap.org/export/embed.html?bbox=-0.1,51.48,-1.05,51.52',
      filename: 'map.html',
      title: 'Interactive Map',
      width: '80vw',
      height: '70vh'
    }
  ]

  return html`<style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
      }
    </style>
    <pion-lightbox
      .items=${iframeItems}
      .selected=${0}
      @close=${() => console.log('Iframe lightbox closed')}
    ></pion-lightbox>`
}

customElements.define('demo-iframe-lightbox', component(IframeDemo))

import { html, component } from '@pionjs/pion'
import '../src/index.ts'
import type { Viewable } from '../src/index.js'

export const SingleImage = () => {
  const singleItem: Viewable[] = [
    {
      id: 'single',
      type: 'image',
      uri: 'https://picsum.photos/1200/800?random=10',
      filename: 'single.jpg',
      title: 'Single image view'
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
      .items=${singleItem}
      .selected=${0}
      .close=${() => console.log('Single image lightbox closed')}
    ></pion-lightbox>`
}

customElements.define('demo-single-image', component(SingleImage))

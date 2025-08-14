import { html, component } from '@pionjs/pion'
import '../src/index.ts'
import type { Viewable } from '../src/index.js'

export const MixedContent = () => {
  const mixedItems: Viewable[] = [
    {
      id: '1',
      type: 'image',
      uri: 'https://picsum.photos/800/600?random=3',
      filename: 'photo.jpg',
      title: 'Sample Photo'
    },
    {
      id: '2',
      type: 'code',
      uri: 'https://icanhazdadjoke.com/',
      filename: 'file.html',
      title: 'Html Page',
      language: 'html'
    },
    {
      id: '3',
      type: 'pdf',
      uri: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
      filename: 'tracemonkey-pldi-09.pdf',
      title: 'TraceMonkey Research Paper'
    }
  ]

  return html` <style>
      :host {
        display: block;
        height: 100%;
        min-height: 500px;
      }

      pion-lightbox {
        width: 100%;
        height: 100%;
        min-height: 500px;
      }
    </style>
    <pion-lightbox
      .items=${mixedItems}
      .selected=${0}
      @close=${() => console.log('Mixed content lightbox closed')}
    ></pion-lightbox>`
}

customElements.define('demo-mixed-lightbox', component(MixedContent))

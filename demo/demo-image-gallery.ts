import { html, component, useEffect } from '@pionjs/pion'
import '../src/index.ts'
import type { Viewable } from '../src/index.js'

export const ImageGallery = () => {
  const sampleItems: Viewable[] = [
    {
      id: '1',
      type: 'image',
      uri: 'https://picsum.photos/800/600?random=1',
      filename: 'landscape.jpg',
      title: 'Beautiful landscape'
    },
    {
      id: '2',
      type: 'image',
      uri: 'https://picsum.photos/600/800?random=2',
      filename: 'portrait.jpg',
      title: 'Portrait shot'
    },
    {
      id: '3',
      type: 'image',
      uri: 'https://picsum.photos/600/800?random=3',
      filename: 'city.jpg',
      title: 'City skyline'
    }
  ]

  const handleClose = () => {
    console.log('Lightbox closed from event listener')
    console.log('here')
  }

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
      @close=${handleClose}
      .items=${sampleItems}
      .selected=${0}
    ></pion-lightbox>`
}

customElements.define('demo-image-gallery', component(ImageGallery))

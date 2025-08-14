import { html, component } from '@pionjs/pion'
import '../src/index.ts'
import type { Viewable } from '../src/index.js'

export const VideoDemo = () => {
  const videoItems: Viewable[] = [
    {
      id: 'video1',
      type: 'video',
      uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
      filename: 'big-buck-bunny.mp4',
      title: 'Big Buck Bunny',
      poster:
        'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
      controls: true
    },
    {
      id: 'video2',
      type: 'video',
      uri: 'https://www.w3schools.com/html/movie.mp4',
      filename: 'bear.mp4',
      title: 'Bear Video',
      controls: true
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
      .items=${videoItems}
      .selected=${0}
      @close=${() => console.log('Video lightbox closed')}
    ></pion-lightbox>`
}

customElements.define('demo-video-lightbox', component(VideoDemo))

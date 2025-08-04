import { html } from '@pionjs/pion'
import '../demo/demo-image-gallery.js'
import '../demo/demo-single-image.js'
import '../demo/demo-mixed-lightbox.js'
import '../demo/demo-video-lightbox.js'
import '../demo/demo-iframe-lightbox.js'

export default {
  title: 'Lightbox',
  tags: ['autodocs']
}

export const ImageGallery = () => {
  return html`<demo-image-gallery></demo-image-gallery>`
}

ImageGallery.parameters = {
  docs: {
    description: {
      story:
        'A lightbox showing multiple images that can be navigated using arrow keys or navigation buttons.'
    }
  }
}

export const SingleImage = () => {
  return html`<demo-single-image></demo-single-image>`
}

SingleImage.parameters = {
  docs: {
    description: {
      story: 'A lightbox displaying a single image with no navigation arrows.'
    }
  }
}

export const MixedContent = () => {
  return html`<demo-mixed-lightbox></demo-mixed-lightbox>`
}

MixedContent.parameters = {
  docs: {
    description: {
      story:
        'A lightbox showcasing different content types: images, pdf and code.'
    }
  }
}

export const VideoLightbox = () => {
  return html`<demo-video-lightbox></demo-video-lightbox>`
}

VideoLightbox.parameters = {
  docs: {
    description: {
      story:
        'A lightbox specifically designed for video content, with autoplay and controls.'
    }
  }
}

export const IframeLightbox = () => {
  return html`<demo-iframe-lightbox></demo-iframe-lightbox>`
}

IframeLightbox.parameters = {
  docs: {
    description: {
      story:
        'A lightbox specifically designed for displaying iframe content, with support for various iframe sources.'
    }
  }
}

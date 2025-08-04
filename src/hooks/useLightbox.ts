import { useEffect } from '@pionjs/pion'
import { html } from '@pionjs/pion'
import { rightChevronIcon, leftChevronIcon } from '../components/icons'
import { image } from '../components/image'
import { code } from '../components/code'
import { pdf } from '../components/pdf'
import { video } from '../components/video'
import { iframe } from '../components/iframe'
import { spinner } from '../components/spinner'
import { useSlideList } from '@neovici/cosmoz-slider'
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta'
import type { Viewable, Props } from '../types'

const render = (
  item: Viewable,
  {
    next,
    prev,
    first,
    last
  }: { next: () => void; prev: () => void; first: boolean; last: boolean }
) => {
  const renderItem = (item: Viewable) => {
    switch (item.type) {
      case 'image':
        return image(item)
      case 'pdf':
        return pdf(item)
      case 'code':
        return code(item)
      case 'video':
        return video(item)
      case 'iframe':
        return iframe(item)
      default:
        console.error('Unrecognized viewable type:', (item as any).type)
        return html`<div class="error">Unsupported file type</div>`
    }
  }

  return html`<div class="canvas">
    ${renderItem(item)}
    <button
      class="prev"
      ?disabled=${first}
      @click=${prev}
      aria-label="Previous item"
    >
      ${leftChevronIcon()}
    </button>
    <button
      class="next"
      ?disabled=${last}
      @click=${next}
      aria-label="Next item"
    >
      ${rightChevronIcon()}
    </button>
    ${spinner()}
  </div>`
}

const useLightbox = ({ items, selected, close }: Props) => {
  const { slide, ...rest } = useSlideList(items, {
    render,
    initial: items[selected ?? 0],
    id: (item) => item.id
  })

  const meta = useMeta({ ...rest })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.defaultPrevented) {
        return
      }
      const { key } = e
      switch (key) {
        case 'Escape':
          close?.()
          e.preventDefault()
          break
        case 'Left':
        case 'ArrowLeft':
          if (meta.first) return
          meta.prev?.()
          e.preventDefault()
          break
        case 'Right':
        case 'ArrowRight':
          if (meta.last) return
          meta.next?.()
          e.preventDefault()
          break
      }
    }

    document.addEventListener('keydown', handler, true)
    return () => document.removeEventListener('keydown', handler, true)
  }, [meta])

  return { slide, close }
}

export default useLightbox

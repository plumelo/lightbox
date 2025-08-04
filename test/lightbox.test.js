import { fixture, html, expect } from '@open-wc/testing'
import '../src/index.ts'

describe('lightbox', () => {
  const mixedItems = [
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

  describe('Component Creation', () => {
    it('should create a lightbox element', async () => {
      const el = await fixture(
        html`<pion-lightbox .items=${mixedItems}></pion-lightbox>`
      )
      expect(el).to.exist
      expect(el.tagName.toLowerCase()).to.equal('pion-lightbox')
    })

    it('should render with empty items array', async () => {
      const el = await fixture(
        html`<pion-lightbox .items=${[]}></pion-lightbox>`
      )
      expect(el).to.exist
    })
  })

  describe('Navigation Controls', () => {
    it('should render close button', async () => {
      const el = await fixture(
        html`<pion-lightbox .items=${mixedItems}></pion-lightbox>`
      )

      const closeBtn = el.shadowRoot.querySelector('.close')
      expect(closeBtn).to.exist
      expect(closeBtn.getAttribute('aria-label')).to.equal('Close lightbox')
    })

    it('should render navigation buttons', async () => {
      const el = await fixture(
        html`<pion-lightbox .items=${mixedItems}></pion-lightbox>`
      )

      const prevBtn = el.shadowRoot.querySelector('.prev')
      const nextBtn = el.shadowRoot.querySelector('.next')

      expect(prevBtn).to.exist
      expect(nextBtn).to.exist
      expect(prevBtn.getAttribute('aria-label')).to.equal('Previous item')
      expect(nextBtn.getAttribute('aria-label')).to.equal('Next item')
    })

    it('should disable prev button on first item', async () => {
      const el = await fixture(
        html`<pion-lightbox
          .items=${mixedItems}
          .selected=${0}
        ></pion-lightbox>`
      )

      const prevBtn = el.shadowRoot.querySelector('.prev')
      expect(prevBtn.hasAttribute('disabled')).to.be.true
    })

    it('should disable next button on last item', async () => {
      const el = await fixture(
        html`<pion-lightbox
          .items=${mixedItems}
          .selected=${mixedItems.length - 1}
        ></pion-lightbox>`
      )

      const nextBtn = el.shadowRoot.querySelector('.next')
      expect(nextBtn.hasAttribute('disabled')).to.be.true
    })

    it('should call close handler when close button is clicked', async () => {
      let closeCalled = false
      const closeHandler = () => {
        closeCalled = true
      }

      const el = await fixture(
        html`<pion-lightbox
          .items=${mixedItems}
          .close=${closeHandler}
        ></pion-lightbox>`
      )

      const closeBtn = el.shadowRoot.querySelector('.close')
      closeBtn.click()

      expect(closeCalled).to.be.true
    })
  })
})

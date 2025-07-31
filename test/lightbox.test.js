import { html, fixture, expect } from '@open-wc/testing';
import '../dist/index.js';

describe('lightbox', () => {
	it('renders hello world', async () => {
		const el = await fixture(html`<pion-lightbox></pion-lightbox>`);
		expect(el.shadowRoot.textContent).to.include('Hello World!');
	});
});

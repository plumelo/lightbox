import { html } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { Pdf } from '../types';
import { loaded$, uri$, pdf$ } from '../util';

export const pdf = (p: Pdf) => {
	const uri = uri$(p.uri).then(pdf$);
	return html`
		<embed
			class="viewable pdf"
			data-pdf
			type="application/pdf"
			src="${until(uri)}"
			?data-loaded=${loaded$(uri)}
			@load=${() => console.log('PDF loaded:', p.id)}
			@error=${() => console.error('PDF failed to load:', p.id)}
		/>
	`;
};

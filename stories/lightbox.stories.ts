import { html } from '@pionjs/pion';
import '../src/index.js';

export default {
	title: 'Lightbox',
	component: 'lightbox',
};

export const BasicLightbox = () => html`<pion-lightbox></pion-lightbox>`;
BasicLightbox.parameters = {
	docs: {
		description: {
			story: 'The basic version of Lightbox showing hello world',
		},
	},
};

import { component, html } from '@pionjs/pion';
import '../src/index.js';

const DemoLightbox = () => html`
	<style>
		body {
			font-family: Arial, sans-serif;
			padding: 20px;
		}
		h1 {
			color: #333;
		}
		lightbox {
			display: block;
			padding: 20px;
			border: 2px solid #ccc;
			border-radius: 8px;
			background-color: #f9f9f9;
			margin: 20px 0;
		}
	</style>
	<h1>Lightbox Demo</h1>
	<p>This is a simple lightbox component demonstration:</p>
	<plumelo-lightbox></plumelo-lightbox>
`;

customElements.define('demo-lightbox', component(DemoLightbox));

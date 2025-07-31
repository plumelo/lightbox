import { component, html } from '@pionjs/pion';

const Lightbox = () => html`
	<style>
		:host {
			display: block;
			padding: 20px;
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			color: white;
			border-radius: 8px;
			text-align: center;
			font-family: Arial, sans-serif;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}

		.message {
			font-size: 24px;
			font-weight: bold;
			margin: 0;
		}

		.subtitle {
			font-size: 14px;
			opacity: 0.8;
			margin-top: 8px;
		}
	</style>
	<div class="message">Hello World!</div>
	<div class="subtitle">Welcome to the Lightbox component</div>
`;

customElements.define(
	'pion-lightbox',
	component(Lightbox, { useShadowDOM: true }),
);

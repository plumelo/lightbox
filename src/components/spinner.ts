import { html, component } from '@pionjs/pion';

const Spinner = () => html`
	<style>
		:host {
			display: inline-block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 1000;
			pointer-events: none;
		}

		.spinner {
			width: 40px;
			height: 40px;
			border: 4px solid rgba(255, 255, 255, 0.3);
			border-top: 4px solid #ffffff;
			border-radius: 50%;
			animation: spin 1s linear infinite;
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}

		:host([hidden]) {
			display: none;
		}
	</style>
	<div class="spinner"></div>
`;

customElements.define('lightbox-spinner', component(Spinner));

export const spinner = () => html`<lightbox-spinner></lightbox-spinner>`;

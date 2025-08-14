import { tagged as css } from '@neovici/cosmoz-utils'

export default css`
  :host {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  cosmoz-slider {
    height: 100%;
    width: 100%;
    cursor: default;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    padding: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    transition: background-color 0.2s ease;
  }

  .close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .close:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  .next,
  .prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 12px 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 4px;
    z-index: 1000;
    transition: background-color 0.2s ease;
  }

  .next:hover,
  .prev:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .next:disabled,
  .prev:disabled {
    cursor: not-allowed;
    opacity: 0.3;
    background: rgba(255, 255, 255, 0.05);
  }

  .next:focus,
  .prev:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  .next {
    right: 20px;
  }

  .prev {
    left: 20px;
  }

  .canvas {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .viewable {
    max-width: 90vw;
    max-height: 90vh;
    transition: opacity 0.3s ease;
  }

  .viewable:not([data-loaded]) {
    opacity: 0;
  }

  .viewable[data-loaded] {
    opacity: 1;
  }

  /* Image specific styles */
  .viewable.image {
    object-fit: contain;
    border-radius: 4px;
  }

  .viewable.image::before {
    place-content: center;
    display: grid;
    height: 100%;
    width: 100%;
  }

  /* PDF specific styles */
  .viewable.pdf {
    border: none;
    border-radius: 4px;
    max-width: 80vw;
    max-height: 80vh;
    height: 100%;
    width: 100%;
  }

  /* Code specific styles */
  .viewable.code {
    background: rgba(40, 44, 52, 0.95);
    color: #abb2bf;
    border-radius: 8px;
    padding: 20px;
    overflow: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.5;
    max-width: 80vw;
    max-height: 80vh;
  }

  .code-content {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* Video specific styles */
  .viewable.video {
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }

  /* Iframe specific styles */
  .viewable.iframe {
    border: none;
    border-radius: 4px;
    background: white;
    height: 100%;
    width: 100%;
  }

  /* Loading spinner positioning */
  lightbox-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  /* Hide spinner when content is loaded */
  .viewable[data-loaded] ~ lightbox-spinner {
    display: none;
  }
`

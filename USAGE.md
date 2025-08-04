# Pion Lightbox

A modern, lightweight lightbox component that handles images, PDFs, and code snippets with ease. Built on [@pionjs/pion](https://github.com/pionjs/pion) and [@neovici/cosmoz-slider](https://github.com/neovici/cosmoz-slider), it's designed to be both powerful and simple to use.

## What you get

- **Multi-format support** – Display images, PDFs, and code files in the same interface
- **Intuitive navigation** – Arrow keys to browse, Escape to close, just like you'd expect
- **Responsive by default** – Works seamlessly across desktop and mobile
- **Highly customizable** – Style it to match your brand, extend it with new content types
- **Accessibility built-in** – Proper ARIA labels and full keyboard support
- **TypeScript ready** – Complete type definitions included

## Getting started

```bash
npm install @plumelo/lightbox
```

## Quick example

Here's how to get a lightbox up and running in minutes:

```typescript
import { html } from 'lit-html'

const sampleItems: Viewable[] = [
  {
    id: '1',
    type: 'image',
    uri: 'https://picsum.photos/800/600?random=1',
    filename: 'landscape.jpg',
    title: 'Beautiful landscape'
  },
  {
    id: '2',
    type: 'image',
    uri: 'https://picsum.photos/600/800?random=2',
    filename: 'portrait.jpg',
    title: 'Portrait shot'
  },
  {
    id: '3',
    type: 'image',
    uri: 'https://picsum.photos/600/800?random=3',
    filename: 'city.jpg',
    title: 'City skyline'
  }
]

const handleClose = () => {
  console.log('Lightbox closed')
  // Your cleanup logic here
}

html`<pion-lightbox
  .items=${sampleItems}
  .selected=${0}
  .close=${handleClose}
></pion-lightbox>`
```

```typescript
import { lightbox, type Viewable } from '@plumelo/lightbox'

const items: Viewable[] = [
  {
    id: '1',
    type: 'image',
    uri: 'path/to/image.jpg',
    filename: 'image.jpg',
    title: 'My Image'
  }
]

const handleClose = () => {
  console.log('Lightbox closed')
  // Your cleanup logic here
}

// Create and show the lightbox
const lightboxComponent = lightbox({
  items,
  selected: 0, // Start with the first item
  close: handleClose
})

document.body.appendChild(lightboxComponent)
```

## Content types

### Images

The bread and butter of any lightbox:

```typescript
{
  id: 'img1',
  type: 'image',
  uri: 'https://example.com/image.jpg',
  filename: 'image.jpg',
  title: 'Beautiful landscape',
  alt: 'A scenic mountain view'
}
```

### PDFs

Perfect for documentation, reports, and important documents:

```typescript
{
  id: 'pdf1',
  type: 'pdf',
  uri: 'https://example.com/document.pdf',
  filename: 'document.pdf',
  title: 'The important stuff'
}
```

### Code snippets

Great for showcasing code examples or configuration files:

```typescript
{
  id: 'code1',
  type: 'code',
  uri: 'https://example.com/script.js',
  // or inline code:
  uri: () => Promise.resolve('console.log("Hello World!");'),
  filename: 'script.js',
  title: 'JavaScript code',
  language: 'javascript'
}
```

## Advanced usage

### Component props

| Property   | Type          | Description                              |
| ---------- | ------------- | ---------------------------------------- |
| `items`    | `Viewable[]`  | Array of content items to display        |
| `selected` | `number?`     | Which item to show first (defaults to 0) |
| `close`    | `() => void?` | Function called when the lightbox closes |

### Content item structure

Every content item shares these base properties:

| Property      | Type                                                             | Description                       |
| ------------- | ---------------------------------------------------------------- | --------------------------------- |
| `id`          | `string`                                                         | Unique identifier                 |
| `uri`         | `string \| Promise<string> \| (() => string \| Promise<string>)` | Content URL or function           |
| `filename`    | `string?`                                                        | Original filename (optional)      |
| `title`       | `string?`                                                        | Display title (optional)          |
| `description` | `string?`                                                        | Additional description (optional) |

## Navigation

### Keyboard shortcuts

- **← →** Navigate between items
- **Escape** Close the lightbox

## Customization

### Styling with CSS variables

Make the lightbox match your design system:

```css
pion-lightbox {
  --lightbox-background: rgba(0, 0, 0, 0.9);
  --lightbox-close-color: white;
  --lightbox-nav-color: white;
  --lightbox-nav-background: rgba(255, 255, 255, 0.1);
}
```

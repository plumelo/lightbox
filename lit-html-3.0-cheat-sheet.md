# LIT-HTML 3.0 CHEAT SHEET

## BASIC SETUP
```javascript
import { html, render } from 'lit-html';

// Basic template
const template = html`<h1>Hello World!</h1>`;

// Render to DOM
render(template, document.body);
```

## TEMPLATE LITERALS
```javascript
// String interpolation
const name = 'John';
const greeting = html`<h1>Hello ${name}!</h1>`;

// Expression binding
const isVisible = true;
const template = html`<div ?hidden=${!isVisible}>Content</div>`;
```

## PROPERTY BINDINGS

### Attribute Binding
```javascript
const id = 'my-id';
const className = 'active';
html`<div id=${id} class=${className}>Content</div>`;
```

### Boolean Attribute Binding (?)
```javascript
const isDisabled = true;
const isHidden = false;
html`<button ?disabled=${isDisabled} ?hidden=${isHidden}>Click me</button>`;
```

### Property Binding (.)
```javascript
const items = ['a', 'b', 'c'];
const selected = 1;
html`<my-list .items=${items} .selectedIndex=${selected}></my-list>`;
```

### Event Binding (@)
```javascript
const handleClick = (e) => console.log('clicked!');
const handleInput = (e) => console.log(e.target.value);

html`
  <button @click=${handleClick}>Click me</button>
  <input @input=${handleInput} />
`;
```

## DIRECTIVES

### Import Directives
```javascript
import { until } from 'lit-html/directives/until.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { when } from 'lit-html/directives/when.js';
import { choose } from 'lit-html/directives/choose.js';
import { map } from 'lit-html/directives/map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { live } from 'lit-html/directives/live.js';
import { ref } from 'lit-html/directives/ref.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { cache } from 'lit-html/directives/cache.js';
import { guard } from 'lit-html/directives/guard.js';
```

### until() - Async Content
```javascript
const fetchData = () => fetch('/api/data').then(r => r.json());
const loadingTemplate = html`<div>Loading...</div>`;

html`
  <div>
    ${until(fetchData(), loadingTemplate)}
  </div>
`;
```

### repeat() - Lists with Keys
```javascript
const items = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

html`
  <ul>
    ${repeat(
      items,
      (item) => item.id,  // Key function
      (item, index) => html`<li>${item.name}</li>`  // Template function
    )}
  </ul>
`;
```

### when() - Conditional Rendering
```javascript
const isLoggedIn = true;
const user = { name: 'John' };

html`
  ${when(
    isLoggedIn,
    () => html`<span>Welcome ${user.name}!</span>`,
    () => html`<button>Login</button>`
  )}
`;
```

### choose() - Multiple Conditions
```javascript
const status = 'loading';

html`
  ${choose(status, [
    ['loading', () => html`<div>Loading...</div>`],
    ['error', () => html`<div>Error occurred</div>`],
    ['success', () => html`<div>Success!</div>`]
  ], () => html`<div>Unknown status</div>`)}
`;
```

### map() - Transform Arrays
```javascript
const numbers = [1, 2, 3, 4, 5];

html`
  <ul>
    ${map(numbers, (num) => html`<li>${num * 2}</li>`)}
  </ul>
`;
```

### ifDefined() - Conditional Attributes
```javascript
const title = undefined;
const alt = 'Image description';

html`<img src="image.jpg" title=${ifDefined(title)} alt=${ifDefined(alt)}>`;
```

### live() - Two-way Binding
```javascript
let inputValue = 'initial';

const handleInput = (e) => {
  inputValue = e.target.value;
  // Re-render here
};

html`<input .value=${live(inputValue)} @input=${handleInput}>`;
```

### ref() - Element References
```javascript
import { createRef } from 'lit-html/directives/ref.js';

const inputRef = createRef();

const focusInput = () => {
  inputRef.value?.focus();
};

html`
  <input ${ref(inputRef)} />
  <button @click=${focusInput}>Focus Input</button>
`;
```

### styleMap() - Dynamic Styles
```javascript
const styles = {
  color: 'red',
  backgroundColor: 'blue',
  fontSize: '16px'
};

html`<div style=${styleMap(styles)}>Styled content</div>`;
```

### classMap() - Dynamic Classes
```javascript
const classes = {
  active: true,
  disabled: false,
  'has-error': true
};

html`<div class=${classMap(classes)}>Content</div>`;
```

### unsafeHTML() - Raw HTML
```javascript
const htmlContent = '<em>This is emphasized</em>';

html`<div>${unsafeHTML(htmlContent)}</div>`;
```

### cache() - Template Caching
```javascript
const view = 'list'; // or 'grid'

html`
  ${cache(view === 'list' 
    ? html`<div class="list-view">List content</div>`
    : html`<div class="grid-view">Grid content</div>`
  )}
`;
```

### guard() - Prevent Re-rendering
```javascript
let expensiveData = { complex: 'object' };

html`
  ${guard([expensiveData], () => 
    html`<expensive-component .data=${expensiveData}></expensive-component>`
  )}
`;
```

## ADVANCED PATTERNS

### Nested Templates
```javascript
const header = html`<header><h1>My App</h1></header>`;
const footer = html`<footer><p>Copyright 2024</p></footer>`;

const layout = html`
  ${header}
  <main>
    <slot></slot>
  </main>
  ${footer}
`;
```

### Template Functions
```javascript
const button = (text, onClick) => html`
  <button @click=${onClick}>${text}</button>
`;

const card = (title, content) => html`
  <div class="card">
    <h2>${title}</h2>
    <div class="content">${content}</div>
  </div>
`;

// Usage
html`
  ${card('My Card', html`
    <p>Card content here</p>
    ${button('Click me', () => console.log('clicked'))}
  `)}
`;
```

### Event Handling Patterns
```javascript
// Event with options
html`<button @click=${handleClick} @click=${{ handleEvent: handleClick, once: true }}>
  Click once
</button>`;

// Custom events
const dispatchCustom = (e) => {
  e.target.dispatchEvent(new CustomEvent('my-event', { 
    detail: { data: 'value' },
    bubbles: true 
  }));
};

html`<button @click=${dispatchCustom}>Dispatch Custom</button>`;
```

### Form Handling
```javascript
const formData = { name: '', email: '' };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form data:', formData);
};

const handleInput = (field) => (e) => {
  formData[field] = e.target.value;
};

html`
  <form @submit=${handleSubmit}>
    <input 
      type="text" 
      .value=${live(formData.name)}
      @input=${handleInput('name')}
      placeholder="Name"
    />
    <input 
      type="email" 
      .value=${live(formData.email)}
      @input=${handleInput('email')}
      placeholder="Email"
    />
    <button type="submit">Submit</button>
  </form>
`;
```

## PERFORMANCE TIPS

### 1. Use Keys for Dynamic Lists
```javascript
// Good - with keys
${repeat(items, item => item.id, item => html`<div>${item.name}</div>`)}

// Bad - without keys
${items.map(item => html`<div>${item.name}</div>`)}
```

### 2. Minimize Re-renders with guard()
```javascript
// Only re-render when data actually changes
${guard([data], () => html`<expensive-component .data=${data}></expensive-component>`)}
```

### 3. Use cache() for Conditional Templates
```javascript
// Cache templates to avoid recreation
${cache(condition ? template1 : template2)}
```

### 4. Prefer Property Binding for Objects
```javascript
// Good - property binding
html`<my-component .complexData=${data}></my-component>`;

// Bad - attribute binding (serializes to string)
html`<my-component complex-data=${JSON.stringify(data)}></my-component>`;
```

## DEBUGGING

### Template Result Inspection
```javascript
const template = html`<div>Hello</div>`;
console.log(template); // TemplateResult object
console.log(template.strings); // Template strings
console.log(template.values); // Interpolated values
```

### Conditional Debugging
```javascript
const debug = true;

html`
  <div>
    ${debug ? html`<div class="debug">Debug info</div>` : ''}
  </div>
`;
```

## COMMON PATTERNS

### Loading States
```javascript
const asyncData = fetch('/api/data').then(r => r.json());

html`
  <div>
    ${until(
      asyncData.then(data => html`<div>Data: ${JSON.stringify(data)}</div>`),
      html`<div class="loading">Loading...</div>`
    )}
  </div>
`;
```

### Error Boundaries
```javascript
const safeRender = (templateFn) => {
  try {
    return templateFn();
  } catch (error) {
    console.error('Template error:', error);
    return html`<div class="error">Something went wrong</div>`;
  }
};

html`${safeRender(() => html`<risky-component></risky-component>`)}`;
```

### Component-like Functions
```javascript
const TodoItem = ({ todo, onToggle, onDelete }) => html`
  <div class="todo-item ${classMap({ completed: todo.completed })}">
    <input 
      type="checkbox" 
      .checked=${todo.completed}
      @change=${() => onToggle(todo.id)}
    />
    <span>${todo.text}</span>
    <button @click=${() => onDelete(todo.id)}>Delete</button>
  </div>
`;

// Usage
const todos = [{ id: 1, text: 'Learn lit-html', completed: false }];

html`
  <div class="todo-list">
    ${repeat(
      todos,
      todo => todo.id,
      todo => TodoItem({ 
        todo, 
        onToggle: toggleTodo, 
        onDelete: deleteTodo 
      })
    )}
  </div>
`;
```

## VERSION 3.0 SPECIFIC FEATURES

### Updated Imports
```javascript
// Directives now in separate files
import { repeat } from 'lit-html/directives/repeat.js';
import { until } from 'lit-html/directives/until.js';
```

### Better TypeScript Support
```javascript
import { html, TemplateResult } from 'lit-html';

const myTemplate = (): TemplateResult => html`<div>Typed template</div>`;
```

### Server-Side Rendering (SSR)
```javascript
import { render } from '@lit-labs/ssr';

const template = html`<div>Server rendered</div>`;
const result = render(template);
```

Remember: lit-html is a low-level library. For full web components, consider using Lit (which builds on lit-html) for a more complete solution with lifecycle management, property definitions, and styling.

import { html } from 'lit-html'
import { until } from 'lit-html/directives/until.js'
import { Code } from '../types'
import { loaded$, uri$ } from '../util'

const code$ = (uri: string) => fetch(uri).then((r) => r.text())

export const code = (c: Code) => {
  const uri = uri$(c.uri).then(code$)

  return html`
    <div class="viewable code" ?data-loaded=${loaded$(uri)}>
      <pre class="code-content" data-language=${c.language || 'text'}>
${until(uri)}</pre
      >
    </div>
  `
}

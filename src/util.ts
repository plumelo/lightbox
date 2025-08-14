import { until } from 'lit-html/directives/until.js'
import { invoke } from '@neovici/cosmoz-utils/function'
import { Uri, ViewableBase } from './types'

export const pdf$ = (uri: string) =>
  fetch(uri)
    .then((r) => r.blob())
    .then((b) => new File([b], 'preview.pdf', { type: 'application/pdf' }))
    .then((b) => {
      const url = URL.createObjectURL(b)
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 1000)
      return url
    })

export const uri$ = (uri: ViewableBase['uri']) =>
  Promise.resolve(invoke(uri) as Uri)

export const loaded$ = (uri$: Uri) =>
  until(
    Promise.resolve(uri$).then(
      () => true,
      () => true
    ),
    false
  )

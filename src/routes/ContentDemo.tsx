import * as React from 'react'
import Lipsum from '../components/lipsum'
import { times } from '../helpers/global'

export default [
  (<div key={0}>
    <h1>Long Page</h1>
    <Lipsum />
  </div>),
  ...times(100, (i: number) => <div key={i + 1}>Page #{i + 2}</div>),
]

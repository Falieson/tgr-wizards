import * as React from 'react'
import { ReactChildren } from '../../../types/common'

export default function SimplePages({children}: {children: ReactChildren}) {
  return <div>
    {children}
  </div>
}

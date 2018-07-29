import * as React from 'react'
import { ReactChildren } from '../../../types/common'

import * as S from './wizard.simple.scss'

export default ({children}: {children: ReactChildren}) => <div
  className={[S.container, S.border].join(' ')}
>
  {children}
</div>

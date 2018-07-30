import * as React from 'react'
import { Provider as ThemeProvider } from '../theme-context'
import * as T from '../theme.scss'
import { ReactChildren } from '../types/common'
import * as S from './SimpleContainer.scss'

interface IProps {
  children: ReactChildren,
  theme?: any, // tslint:disable-line no-any
}

export default ({children, theme = T}: IProps) => <div
  className={[S.container, S.border, T.bg_secondary].join(' ')}
>
  <ThemeProvider value={{theme}}>
    {children}
  </ThemeProvider>
</div>

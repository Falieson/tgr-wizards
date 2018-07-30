import * as React from 'react'
import { Provider as ThemeProvider } from '../theme-context'
import { ReactChildren } from '../types/common'
import * as S from './SimpleContainer.scss'

interface IProps {
  children: ReactChildren,
  theme: any, // tslint:disable-line no-any
}

export default ({children, theme}: IProps) => <div
  className={[S.container, S.border, theme.bg_secondary].join(' ')}
>
  <ThemeProvider value={{theme}}>
    {children}
  </ThemeProvider>
</div>

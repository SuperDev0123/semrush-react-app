import React, { useContext, useEffect } from 'react'
import MomentUtils from '@date-io/moment'
import { IntlProvider } from 'react-intl'
import { create } from 'jss'
import rtl from 'jss-rtl'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import {
  createTheme,
  jssPreset,
  StylesProvider,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppContext from '../contextProvider/AppContextProvider/AppContext'
import AppLocale from '../../../common/config/i18n'
import AppLayout from '../AppLayout'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const AppWrapper = ({ children }) => {
  const { theme, locale, direction } = useContext(AppContext)
  const currentAppLocale = AppLocale[locale.locale]
  useEffect(() => {
    if (direction === 'rtl') {
      document.body.setAttribute('dir', 'rtl')
    } else {
      document.body.setAttribute('dir', 'ltr')
    }
  }, [direction])

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={createTheme(theme)}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <StylesProvider jss={jss}>
            <CssBaseline />
            <AppLayout>{children}</AppLayout>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default AppWrapper

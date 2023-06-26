import React, { useContext } from 'react'
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

import { Layout as MainLayout } from '@src/common/components'
import AppLocale from '@src/common/config/i18n'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import { useLocation } from 'react-router-dom'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  if (pathname.includes('guest')) return children

  return <MainLayout>{children}</MainLayout>
}

const AppWrapper = ({ children }) => {
  const { theme, locale } = useContext(AppContext)
  const currentAppLocale = AppLocale[locale.locale]

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={createTheme(theme)}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <StylesProvider jss={jss}>
            <CssBaseline />
            <Layout>{children}</Layout>
          </StylesProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default AppWrapper

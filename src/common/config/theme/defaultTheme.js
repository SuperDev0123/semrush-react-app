import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { Fonts } from '../../../@jumbo/constants/ThemeOptions'

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
})

const defaultTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  radius: 10,
  spacing: 4,
  direction: 'ltr',
  palette: {
    type: 'light',
    common: {
      black: '#000',
      white: '#fff',
      dark: '#020202',
    },
    primary: {
      main: '#0414FF',
      dark: '#0A3D80',
      contrastText: '#fff',
    },
    primaryalt: {
      main: '#FFFFFF',
      dark: '#0A3D80',
      contrastText: '#0A3D80',
    },
    secondary: {
      main: '#03DAC5',
      dark: '#018786',
      contrastText: '#fff',
    },
    success: {
      light: '#D7F5B1',
      main: '#27B59B',
      dark: '#27B59B',
    },
    info: {
      light: '#9BE7FD',
      main: '#0099DD',
      dark: '#0356AF',
      contrastText: '#fff',
    },
    warning: {
      light: '#FFDE99',
      main: '#FF9A03',
      dark: '#FF9A03',
    },
    error: {
      light: '#FFC7D1',
      main: '#F44336',
      dark: '#F44336',
    },
    sidebar: {
      bgColor: '#273AB5',
      textColor: '#fff',
      textDarkColor: '#273AB5',
      textActiveColor: '#FFFFFF',
      navHoverBgColor: 'rgb(255 255 255 / 22%);',
      navActiveBgColor: 'rgb(255 255 255 / 22%);',
      borderColor: 'rgba(33, 33, 33, 0.08)',
    },
    horizontalNav: {
      navigationColor: 'rgba(255, 255, 255, 0.74)',
      navigationActiveColor: 'rgba(255, 255, 255, 1)',
      textColor: 'rgba(0, 0, 0, 0.6)',
      textDarkColor: '#273AB5',
      textActiveColor: '#FFFFFF',
      menuHoverBgColor: 'rgb(229, 229, 229)',
      menuActiveBgColor: 'rgb(239, 229, 253)',
    },
    background: {
      paper: '#FFFFFF',
      default: '#DEEBF1',
    },
    text: {
      primary: '#273AB5',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.3)',
      white: '#fff',
      primaryNew: '#19519D',
    },
    btn: {
      hover: 'rgba(0, 0, 0, 0.08)',
    },
    lightBtn: {
      bgColor: '#f5f5f5',
      textColor: 'rgba(0, 0, 0, 0.38)',
    },
    borderColor: {
      main: 'rgba(0, 0, 0, 0.06)',
      dark: 'rgba(0, 0, 0, 0.12)',
    },
    popupColor: {
      main: '#fff',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: Fonts.PRIMARY,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 'bold',
    fontWeightExtraBold: 700,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'made_tommyblack,sans-serif',
        fontSize: 34,
        lineHeight: '43px',
        fontWeight: 900,
        [breakpoints.up('md')]: {
          fontSize: 36,
          lineHeight: '45px',
        },
      },
      h2: {
        fontFamily: 'made_tommyextrabold,sans-serif',
        fontSize: 32,
        lineHeight: '40px',
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: 34,
          marginBottom: 6,
          lineHeight: 1.5,
        },
      },
      h3: {
        fontFamily: 'made_tommymedium,sans-serif',
        fontSize: 22,
        lineHeight: 1.3,
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: 27,
          lineHeight: '32px',
        },
      },
      h4: {
        fontFamily: 'made_tommylight,sans-serif',
        fontSize: 20,
        lineHeight: 1.3,
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: 24,
          lineHeight: '30px',
        },
      },
      h5: {
        fontSize: 16,
        fontWeight: 400,
      },
      h6: {
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.5,
      },
      subtitle1: {
        fontSize: 20,
        fontWeight: 400,
        letterSpacing: 0.15,
        lineHeight: '24px',
      },
      subtitle2: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.1,
      },
      body1: {
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0.5,
      },
      body2: {
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0.25,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 'bold',
        letterSpacing: 1.25,
        fontSize: 13,
      },
    },
    MuiToggleButton: {
      root: {
        borderRadius: 4,
      },
    },
    MuiCardLg: {
      root: {
        borderRadius: 10,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 4,
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
      },
    },
    MuiTab: {
      textColorPrimary: {
        color: '#273AB5',
      },
    },
    radius: 10,
    spacing: 4,
    direction: 'ltr',
    palette: {
      type: 'light',
      common: {
        black: '#000',
        white: '#fff',
        dark: '#020202',
      },
      primary: {
        main: '#0414FF',
        dark: '#0A3D80',
        contrastText: '#fff',
      },
      primaryalt: {
        main: '#FFFFFF',
        dark: '#0A3D80',
        contrastText: '#0A3D80',
      },
      secondary: {
        main: '#03DAC5',
        dark: '#018786',
        contrastText: '#fff',
      },
      success: {
        light: '#D7F5B1',
        main: '#27B59B',
        dark: '#27B59B',
      },
      info: {
        light: '#9BE7FD',
        main: '#0099DD',
        dark: '#0356AF',
        contrastText: '#fff',
      },
      warning: {
        light: '#FFDE99',
        main: '#FF9A03',
        dark: '#FF9A03',
      },
      error: {
        light: '#FFC7D1',
        main: '#F44336',
        dark: '#F44336',
      },
      sidebar: {
        bgColor: '#273AB5',
        textColor: '#fff',
        textDarkColor: '#273AB5',
        textActiveColor: '#FFFFFF',
        navHoverBgColor: 'rgb(255 255 255 / 22%);',
        navActiveBgColor: 'rgb(255 255 255 / 22%);',
        borderColor: 'rgba(33, 33, 33, 0.08)',
      },
      horizontalNav: {
        navigationColor: 'rgba(255, 255, 255, 0.74)',
        navigationActiveColor: 'rgba(255, 255, 255, 1)',
        textColor: 'rgba(0, 0, 0, 0.6)',
        textDarkColor: '#273AB5',
        textActiveColor: '#FFFFFF',
        menuHoverBgColor: 'rgb(229, 229, 229)',
        menuActiveBgColor: 'rgb(239, 229, 253)',
      },
      background: {
        paper: '#FFFFFF',
        default: '#DEEBF1',
      },
      text: {
        primary: '#273AB5',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.3)',
        white: '#fff',
      },
      btn: {
        hover: 'rgba(0, 0, 0, 0.08)',
      },
      lightBtn: {
        bgColor: '#f5f5f5',
        textColor: 'rgba(0, 0, 0, 0.38)',
      },
      borderColor: {
        main: 'rgba(0, 0, 0, 0.06)',
        dark: 'rgba(0, 0, 0, 0.12)',
      },
      popupColor: {
        main: '#fff',
      },
    },
    status: {
      danger: 'orange',
    },
    typography: {
      fontFamily: Fonts.PRIMARY,
      fontWeightExtraLight: 200,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 'bold',
      fontWeightExtraBold: 700,
    },
    overrides: {
      MuiTypography: {
        h1: {
          fontFamily: 'made_tommyblack,sans-serif',
          fontSize: 34,
          lineHeight: '43px',
          fontWeight: 900,
          [breakpoints.up('md')]: {
            fontSize: 36,
            lineHeight: '45px',
          },
        },
        h2: {
          fontFamily: 'made_tommyextrabold,sans-serif',
          fontSize: 32,
          lineHeight: '40px',
          fontWeight: 'bold',
          [breakpoints.up('md')]: {
            fontSize: 34,
            marginBottom: 6,
            lineHeight: 1.5,
          },
        },
        h3: {
          fontFamily: 'made_tommymedium,sans-serif',
          fontSize: 22,
          lineHeight: 1.3,
          fontWeight: 'bold',
          [breakpoints.up('md')]: {
            fontSize: 27,
            lineHeight: '32px',
          },
        },
        h4: {
          fontFamily: 'made_tommylight,sans-serif',
          fontSize: 20,
          lineHeight: 1.3,
          fontWeight: 'bold',
          [breakpoints.up('md')]: {
            fontSize: 24,
            lineHeight: '30px',
          },
        },
        h5: {
          fontSize: 16,
          fontWeight: 400,
        },
        h6: {
          fontSize: 14,
          fontWeight: 'bold',
          letterSpacing: 0.5,
        },
        subtitle1: {
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: 0.15,
          lineHeight: '24px',
        },
        subtitle2: {
          fontSize: 16,
          fontWeight: 'bold',
          letterSpacing: 0.1,
        },
        body1: {
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: 0.5,
        },
        body2: {
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 0.25,
        },
      },
      MuiButton: {
        root: {
          fontWeight: 'bold',
          letterSpacing: 1.25,
          fontSize: 13,
        },
      },
      MuiToggleButton: {
        root: {
          borderRadius: 4,
        },
      },
      MuiCardLg: {
        root: {
          borderRadius: 10,
        },
      },
      MuiCard: {
        root: {
          borderRadius: 4,
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
        },
      },
      MuiTab: {
        textColorPrimary: {
          color: '#273AB5',
        },
      },
      MuiPopover: {
        paper: {
          backgroundColor: '#FFFFFF',
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
  },
}
export default defaultTheme

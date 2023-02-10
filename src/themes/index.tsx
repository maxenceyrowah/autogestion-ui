import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material'
import {
  ReactNode,
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import components from './overrides'
import palette from './palette'
import typography from './typography'

type ThemeProviderProps = {
  children: ReactNode
}

export type Theme = {
  name: string
  appBar: {
    height: number
  }
  isDesktop: boolean
}
type ThemeContextProps = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<typeof appTheme>>
}

const appTheme = {
  name: 'default',
  appBar: { height: 48 },
  isDesktop: false,
}

const appThemeContext = {
  theme: appTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextProps>(appThemeContext)

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const muiTheme = createTheme({
    palette: palette.default,
    typography,
    components,
  })

  const [theme, setTheme] = useState(appTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    background-color: ${props => props.theme.background};
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    width: 100vw;
    padding: 0 24px;
    padding-top: 90px;

    @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
      max-width: 869px;
      margin: auto;
      background-color: ${props => props.theme.backgroundBody};
    }
  }

  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`

function App ({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
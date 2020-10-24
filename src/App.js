import React from 'react';
import Welcome from './components/intro/Welcome'
import {ThemeProvider} from '@material-ui/core/styles'
import {theme} from './theme/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
    <Welcome />
      </ThemeProvider>
    </div>
  );
}

//route '/' => componente welcome
// route'/register => componente Form => register
// route'/login => componente Form => login


export default App;

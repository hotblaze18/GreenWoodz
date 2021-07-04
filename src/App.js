import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#85a719'
    },
    secondary: {
      main: '#e6ea44'
    },
    info: {
      main: '#625638'
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/'>
              <Home /> 
            </Route>  
          </Switch>  
        </Router>
      </ThemeProvider>  
    </>
  );
}

export default App;

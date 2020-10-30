import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import Home from './components/Home/Home';
import { GlobalStyles } from "./components/Themes/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes/Themes"

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className="App">
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles/>
        <Router>
          <Home theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} themeToggler={themeToggler}/>
        </Router>
        </>
    </ThemeProvider>
    </div>
  );
}

export default App;

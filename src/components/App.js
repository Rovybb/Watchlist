import Home from './home/Home';
import Watchlist from './watchlist/Watchlist';
import Missing from './body/Missing';
import Header from './body/Header';
import GlobalStyles from './styles/Global';
import { AppStyled } from './styles/App.styled'
import { dark, light } from './styles/Themes';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function App() {
  const { darkTheme } = useContext(DataContext);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyles />
      <AppStyled>
        <Header title={"Movies"} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </AppStyled>
    </ThemeProvider> 
  );
}

export default App;

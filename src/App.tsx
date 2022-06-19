import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.scss';
import AppContainer from './components/MainContent/MainContent';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;

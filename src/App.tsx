import { ThemeProvider } from './components/ui/theme-provider';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;

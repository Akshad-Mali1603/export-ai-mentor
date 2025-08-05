import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
        <HomePage/>
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App;

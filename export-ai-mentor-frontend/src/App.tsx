import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BuyerVerificationPage from './Pages/BuyerVerificationPage';
import AboutUs from './Pages/aboutUs';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';


function App() {
  const theme = createTheme({
    colors: {
      'slate': [
        '#f8fafc',
        '#f1f5f9',
        '#e2e8f0',
        '#cad5e2',
        '#90a1b9',
        '#62748e',
        '#45556c',
        '#314158',
        '#1d293d',
        '#0f172b',
        '#020618'
      ]
    }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/modules' element={<HomePage />} />
          <Route path='/modules/BuyerVerificationPage' element={<BuyerVerificationPage />} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/login' element={<SignUpPage/>} />
           <Route path='/profile' element={<ProfilePage/>} />
        </Routes>

      </BrowserRouter>
    </MantineProvider>
  );
}
export default App;

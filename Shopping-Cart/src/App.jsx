import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './app.css'
import Footer from './components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App

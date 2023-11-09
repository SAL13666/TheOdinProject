import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './app.css'
function App() {

  return (
    <>
      <NavBar white={true}/>
      <Outlet />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBarComponent/>
        <ItemListContainer greeting={"Bienvenidos"}/>
      </div>
    </>
  )
}

export default App

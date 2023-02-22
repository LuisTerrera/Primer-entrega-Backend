import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer"


function App() {

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
       <Route exact path="/" element={<ItemListContainer/>} />
       <Route exact path="/category/:category" element={<ItemListContainer/>} />
       <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App

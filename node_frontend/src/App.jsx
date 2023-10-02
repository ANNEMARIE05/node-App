import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Page from './assets/pages/page'
import Calendrier from './assets/pages/calendrier'
import Login from './assets/pages/connexion'
import Register from './assets/pages/inscription'
import TodoList from './assets/pages/todoList'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/calendrier' element={<Calendrier/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/todolist' element={<TodoList/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

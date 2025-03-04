import { useState } from 'react'
import './App.css'
import Todo from './Project/Todo/Todo'
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename="basename={import.meta.env.BASE_URL}">
      <Todo/>
    </BrowserRouter>
    </>
  )
}

export default App

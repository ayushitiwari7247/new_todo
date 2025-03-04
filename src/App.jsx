import { useState } from 'react'
import './App.css'
import Todo from './Project/Todo/Todo'
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename="/">
      <Todo/>
    </BrowserRouter>
    </>
  )
}

export default App

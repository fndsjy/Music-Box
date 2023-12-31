import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)   

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
        variant={"black"}
        onClick={()=>{console.log("Button was clicked")}}
        btnText="Custom Button Text"
        />

        <Button
        variant={"secondary"}
        onClick={() => {alert("Clicked Button")}}
        btnText="Alert Button"
        />
        <Button/>
      </header>
    </div>
  )
}

export default App

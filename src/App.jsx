import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Resources from './Components/Resources/Resources'

function App() {
  const [count, setCount] = useState(0) ;
  
  return (
    <>
      <div>
        <Header></Header>
        
        <Resources></Resources>
        
      </div>
     
     
     
    </>
  )
}

export default App

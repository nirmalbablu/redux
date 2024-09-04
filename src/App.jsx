import { useState } from 'react'
import './App.css'
import Cakeview from './features/cake/cakeview'
import Icecreamview from './features/icecream/icecreamview'
import Userview from './features/user/userview'

function App() {

  return (
    <>
       <div className='app'></div>
       <Cakeview/>
       <Icecreamview/>
       <Userview/>
    </>
  )
}

export default App

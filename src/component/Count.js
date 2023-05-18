import React from 'react'
import {useAtom} from "jotai"
import {increment,decrement} from './atoms'

const Count = () => {
    const[count,increase]=useAtom(increment)
    const[,decrease]=useAtom(decrement)
    return ( 
    <>
  count -- {count} 
  <button type="text" onClick={increase}  >add</button>
  <button type="text" onClick={decrease}  >decrease</button>
  </>
   
  )
}

export default Count
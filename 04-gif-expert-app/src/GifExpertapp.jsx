import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

const [category,setCategory]= useState(['element1', 'element2'])

const agregarElement = (element)=> {
  if(category.includes(element)) return;
  setCategory([...category,element])
}

  return (
   <>
    <h1>GifExpertApp</h1>

    <AddCategory agregarElement={agregarElement} />
    
    <ol>
      {category.map(element =>{return  <li key={element} >{ element} </li>})}
    </ol>
   </>
  )
}



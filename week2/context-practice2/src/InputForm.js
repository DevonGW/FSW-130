import React, { useState } from 'react'

const InputForm = (props)=>{
   const [title, setTitle] = useState('')
   const [date, setDate] = useState('')
   // eslint-disable-next-line
   const [movie, setMovie] = useState({})
   


   function submit(e){
      e.preventDefault()
      const newMovie = {title: title, date: date}
      setMovie({...newMovie})
   }

   
 
   
   return(
   <form onSubmit={submit} >
       <input 
        type='text'
        name='title'
        placeholder='title'
        required
        onChange={(e)=> setTitle(e.target.value)}
     />

       <input 
        type='text'
        name='date'
        placeholder='year'
        onChange={(e)=> setDate(e.target.value)}
    
     />
   </form>    
     
   )

}

export default InputForm
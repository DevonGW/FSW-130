import React from 'react'
import {InputContextConsumer} from './InputContext'

const Output = (props)=>{
  console.log(props)
    return(
       <div className='output'>
        <InputContextConsumer>
          {title =>(
            <div className='box'>{title}</div>
          )}
       
        </InputContextConsumer>
          
       </div>
    
        
    )
}

export default Output
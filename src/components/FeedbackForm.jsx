import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    

    const handleChange = (e) => {
        if(text =='') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text!=='' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)  
        console.log({text})

    }

  return (
    <Card>
        <form>
    
        <h2>How would you rate our service?</h2>

        <div className='input-group'>
            <input 
            onChange={handleChange} 
            type="text" 
            placeholder='Write a review' 
            value = {text} 
            />
            
            <Button type = 'submit' isDisabled = {btnDisabled} version='secondary' >
                Send
            </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form> 
   </Card>
    
  )
}

export default FeedbackForm
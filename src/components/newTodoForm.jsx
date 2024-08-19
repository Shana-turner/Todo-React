
import { useState } from "react";

export function NewTodoForm(props){
    const [newItem, setNewItem] = useState('');
    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return
    
        props.onSubmit(newItem)

        setNewItem('')
    }
    

    return <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form'>
            <label htmlFor='item' className='item-label'>New Item</label>
            <input 
            type='text' 
            value={newItem} 
            onChange={e =>setNewItem(e.target.value)} 
            id='item' 
            className='item-input'
            placeholder='your task'
            /> 
        </div>
        <button className='btn'>Add</button>
    </form>
}
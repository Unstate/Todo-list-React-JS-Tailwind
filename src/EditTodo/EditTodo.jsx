import { useState } from 'react'
import React from 'react'
import classes from './EditTodo.module.scss'

export const EditTodo = (props) => {

    debugger

    let [value, setValue] = useState(props.value)

    const handleOnCLick = () => {
        
        props.editTask(props.todo.id,value)

        setValue("")
    }

    return (
        <div className={classes.pageContainer}>
            <div className={classes.inputContainer}>
                <input
                    type="text"
                    placeholder='Change your todo'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}/>
            </div>
            <button className={classes.buttonContainer} onClick={handleOnCLick}>
                Edit todo
            </button>
        </div>
    )
}

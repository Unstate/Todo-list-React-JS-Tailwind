import { useState } from 'react'
import React from 'react'
import classes from './../EditTodo/EditTodo.module.scss'

export const EditImportantTodo = (props) => {

    debugger

    let [value, setValue] = useState(props.value)

    const handleOnCLick = () => {
        
        props.editImportantTask(props.imp.id,value)

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

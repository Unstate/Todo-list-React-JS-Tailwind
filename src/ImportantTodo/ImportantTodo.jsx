import { AiOutlineDelete, AiOutlineMinusSquare, AiOutlineEdit } from 'react-icons/ai'
import classes from './ImportantTodo.module.scss'

export const ImportantTodo = (props) => {
    debugger
    return (
        <div className={props.imp.completed === true ? `${classes.completed} ${classes.ownTodos}` : classes.ownTodos}>
            <div onClick={() => props.completeImportantTodo(props.imp.id)}>
                {props.imp.task}
            </div>
            <div className={classes.buttonsContainer}>
                <AiOutlineMinusSquare className={classes.someButton} onClick={() => props.unMarkAsImportant(props.imp.id)}></AiOutlineMinusSquare>
                <AiOutlineEdit className={classes.someButton} onClick={() => props.editImportantTodo(props.imp.id)}></AiOutlineEdit>
                <AiOutlineDelete className={classes.someButton}
                    onClick={() => {
                        let conf = window.confirm('Вы действительно хотите удалить заметку?')
                        if (conf) {
                            props.deleteImportantTodo(props.imp.id)
                        }
                    }}>
                </AiOutlineDelete>
            </div>
        </div>
    )
}

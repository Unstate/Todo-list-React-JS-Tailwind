import { AiOutlineDelete, AiOutlineSafety, AiOutlineEdit } from 'react-icons/ai'
import classes from './Todo.module.scss'

export const Todo = (props) => {
    debugger
    return (
        <div className={props.todo.completed === true ? `${classes.completed} ${classes.ownTodos}` : classes.ownTodos}>
            <div onClick={() => props.completeTodo(props.todo.id)}>
                {props.todo.task}
            </div>
            <div className={classes.buttonsContainer}>
                <AiOutlineSafety className={classes.someButton} onClick={() => props.markAsImportant(props.todo.id)}></AiOutlineSafety>
                <AiOutlineEdit className={classes.someButton} onClick={() => props.editTodo(props.todo.id)} ></AiOutlineEdit>
                <AiOutlineDelete className={classes.someButton}
                    onClick={() => {
                        let conf = window.confirm('Вы действительно хотите удалить заметку?')
                        if (conf) {
                            props.deleteTodo(props.todo.id)
                        }
                    }}>
                </AiOutlineDelete>
            </div>
        </div>
    )
}

import classes from './TodoWrapper.module.scss'
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../Todo/Todo';
import { ImportantTodo } from '../ImportantTodo/ImportantTodo';
import { EditTodo } from '../EditTodo/EditTodo';
import { EditImportantTodo } from '../EditImportantTodo/EditImportantTodo';
uuidv4();

export const TodoWrapper = () => {
    let [todos, setTodos] = useState([]);
    let [important, setImportant] = useState([]);
    let inputRef = useRef();

    const handleOnCLick = () => {
        setTodos([...todos, {
            id: uuidv4(), task: inputRef.current.value,
            completed: false, isEditing: false
        }])
        inputRef.current.value = '';
    }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const completeImportantTodo = (id) => {
        setImportant(important.map(imp => imp.id === id ? { ...imp, completed: !imp.completed } : imp))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const deleteImportantTodo = (id) => {
        setImportant(important.filter(imp => imp.id !== id))
    }

    const markAsImportant = (id) => {
        todos.map(todo => todo.id === id ? setImportant([...important, todo]) : todo)
        deleteTodo(id)
    }

    const unMarkAsImportant = (id) => {
        important.map(imp => imp.id === id ? setTodos([...todos, imp]) : imp)
        deleteImportantTodo(id)
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    
    const editImportantTodo = (id) => {
        setImportant(important.map(imp => imp.id === id ? { ...imp, isEditing: !imp.isEditing } : imp))
    }

    const editTask = (id, value) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: value, isEditing: !todo.isEditing } : todo))
    }

    const editImportantTask = (id, value) => {
        setImportant(important.map(imp => imp.id === id ? { ...imp, task: value, isEditing: !imp.isEditing } : imp))
    }

    return (
        <div className={classes.page}>
            <div className={classes.todoForm}>
                <div className={classes.headerContainer}><h1>Create your own todo and done it!</h1></div>
                <div className={classes.todo}>
                    <input ref={inputRef} placeholder='What is your todo today?'></input>
                    <button className={classes.addTodoButton} onClick={handleOnCLick}> Create todo </button>
                </div>
                {important.map((imp, index) => imp.isEditing
                    ? <EditImportantTodo
                        value={imp.task}
                        imp={imp}
                        key={index}
                        editImportantTask={editImportantTask}>
                    </EditImportantTodo>
                    : <ImportantTodo
                        imp={imp}
                        key={index}
                        deleteImportantTodo={deleteImportantTodo}
                        completeImportantTodo={completeImportantTodo}
                        unMarkAsImportant={unMarkAsImportant}
                        editImportantTodo={editImportantTodo}>
                    </ImportantTodo>)}
                {todos.map((todo, index) => todo.isEditing
                    ? <EditTodo
                        value={todo.task}
                        todo={todo}
                        key={index}
                        editTask={editTask}>
                    </EditTodo>
                    : <Todo
                        todo={todo}
                        key={index}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        markAsImportant={markAsImportant}
                        editTodo={editTodo}>
                    </Todo>)}
            </div>
        </div>
    )
}
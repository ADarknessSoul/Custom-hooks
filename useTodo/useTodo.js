import { todoReducer } from './todoReducer';
import { useEffect, useReducer } from "react";

export const useTodo = () => {

    const initialState = [];

    const init = () => {

        return JSON.parse( localStorage.getItem('todos') ) || [];

    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleOnNewTodo = (todo) => {

        const action = {

            type: '[TODO] Add Todo',
            payload: todo,

        }

        dispatch( action );

    }

    useEffect(() => {
  
        if(todos.length) {

            localStorage.setItem('todos', JSON.stringify(todos));

        }
    
    }, [todos])

    const handleDeleteTodo = ( id ) => {

        dispatch({

            type: '[TODO] Remove Todo',
            payload: id

        });

    }

    const handleToggleTodo = (id) => {

        dispatch({

            type: '[TODO] Toggle Todo',
            payload: id,

        });

    }

    return {    

        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleDeleteTodo,
        handleOnNewTodo,
        handleToggleTodo,

    }

}

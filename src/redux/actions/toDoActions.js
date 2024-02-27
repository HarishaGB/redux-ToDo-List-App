import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";


export const addTodo = (newTodo) => {

    return({
        type: ADD_TODO,
        payload: newTodo
    })
}

export const deleteTodo = (delete_id) =>{

    return({
        type: DELETE_TODO,
        payload: delete_id
    })

}
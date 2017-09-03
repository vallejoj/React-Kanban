// import { remote, endpoint, fetcher } from 'redux-fetch-api';

export const ADD_CARD = 'ADD_CARD'
export const LOAD_TODOS = 'LOAD_TODOS'
export const SHIFT_CARD_RIGHT = 'SHIFT_CARD_RIGHT'

export function addCard(text) {
  console.log('text',text)
  return {
    type: ADD_CARD,
      text:text
       }
}

export const loadTodos = (todos) => {
  return (dispatch) => {
    return getTodos()
      .then( ({ todos }) => {
        dispatch({
          type: LOAD_TODOS,
          todos: todos
        })
      })
  }
}


export function getTodos (){
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve ({
        todos: ['go running', 'get stuff', 'max out', 'have fun']
      });
    }, 1000)
  })
}

import querystring from "querystring";
import axios from "axios";

export const ADD_CARD = 'ADD_CARD';
export const LOAD_TODOS = 'LOAD_TODOS';
export const CHANGE_PROGRESS_STATUS_TO_DOING = 'CHANGE_PROGRESS_STATUS_TO_DOING';


export function addCard(text) {
  console.log('text',text)
  return {
    type: ADD_CARD,
      text:text
       }
}

export function changeProgressStatusToDoing(status,id){
console.log("check out my status",status)
  const action= {
    type: CHANGE_PROGRESS_STATUS_TO_DOING ,
    status: status,
    id:id
  }
  return  action
}

export const loadTodos = (todos) => {
  return (dispatch) => {
    axios.get("/cards")
    .then((cards) => {
      console.log('my cards',cards.data)
      dispatch({
        type: LOAD_TODOS,
        cards: cards.data
      })
    })
  }
}

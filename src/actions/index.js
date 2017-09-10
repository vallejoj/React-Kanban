import querystring from "querystring";
import axios from "axios";

export const ADD_CARD = 'ADD_CARD';
export const LOAD_TODOS = 'LOAD_TODOS';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD'



export const addCard = card => {
  return (dispatch) => {
    axios.post("/new", querystring.stringify(card))
    .then((cards) => {
      console.log('cardsssss', cards)
      dispatch({
        type: ADD_CARD,
        cards: cards.data
      })
    })
  }
}

export const deleteCard = id =>{
  return (dispatch)=>{
    axios.delete(`/delete/${id}/edit`)
    .then((cards) => {
      dispatch({
        type:DELETE_CARD,
        cards:cards.data,
        id:id
      })
    })
  }
}


export const editCard= (edited, id) => {
console.log('my id', id)
console.log('edited',edited)
let editID = parseInt(id,10);

    return (dispatch) => {
      axios.put(`/move/${editID}/edit`, querystring.stringify(edited))
      .then((cards) => {
        console.log('cards',cards)
        dispatch({
          type: EDIT_CARD,
          cards:cards.data

        });
      });
    };
};

export const loadTodos = (todos) => {
  return (dispatch) => {
    axios.get("/cards")
    .then((cards) => {

      dispatch({
        type: LOAD_TODOS,
        cards: cards.data
      })
    })
  }
}

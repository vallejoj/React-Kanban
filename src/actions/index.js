// import { remote, endpoint, fetcher } from 'redux-fetch-api';

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
        todos: [{
          title:"running outside",
          description:"boring",
          priority:"low",
          progress:"queue",
          id: "1"
        },
        {
          title:"Saving the world!!!! ",
          description:"Awesome!",
          priority:"high",
          progress:"progress",
          id:"2"
        }
      ]

      });
    }, 100)
  })
}

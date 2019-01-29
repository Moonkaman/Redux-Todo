import { ADD_TODO,COMPLETE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    },
    {
      value: 'Buy eggs',
      completed: false
    },
    {
      value: 'Pay Bills',
      completed: false
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            value: action.payload,
            completed: false
          }
        ]
      }

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo,index) => {
            if(index === action.payload) {
              console.log(index, action.payload);
              return {
                ...todo,
                completed: !todo.completed
              }
            }
            return todo
          })
      }

    default:
      return state;
  }
}

export default reducer;
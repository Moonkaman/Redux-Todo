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
    default:
      return state;
  }
}

export default reducer;
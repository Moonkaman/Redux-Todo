export const loadState = _ => {
  try {
    const serializedState = localStorage.getItem('nb-todo-state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('nb-todo-state', serializedState);
  } catch (err) {
    console.log(err);
  }
}
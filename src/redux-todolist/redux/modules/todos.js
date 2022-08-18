/* ACTION TYPES ------------------------------------------------------------- */
const CREATE_TODO = 'todolist/todos/CREATE_TODO';
const UPDATE_TODO = 'todolist/todos/UPDATE_TODO';
const DELETE_TODO = 'todolist/todos/DELETE_TODO';

/* ACTION CREATORS ---------------------------------------------------------- */
export const createTodoAction = (todo) => ({
  type: CREATE_TODO,
  payload: todo,
});
export const updateTodoAction = (id) => ({ type: UPDATE_TODO, payload: id });
export const deleteTodoAction = (id) => ({ type: DELETE_TODO, payload: id });

/* INITIAL STATE ------------------------------------------------------------ */
const initialState = [];

/* REDUCER ------------------------------------------------------------------ */
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return [...state, payload];
    case UPDATE_TODO:
      return [...state].map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case DELETE_TODO:
      return [...state].filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

export default todoReducer;

/* ACTION TYPES ------------------------------------------------------------- */
const INCREASE_NUMBER = 'ReduxCounter/counter/INCREASE_NUMBER';
const DECREASE_NUMBER = 'ReduxCounter/counter/DECREASE_NUMBER';
const WRITE_NUMBER = 'ReduxCounter/counter/WRITE_NUMBER';

/* ACTION CREATORS ---------------------------------------------------------- */
export const increaseAction = () => ({
  type: INCREASE_NUMBER,
  payload: 2,
});

export const decreaseAction = () => ({
  type: DECREASE_NUMBER,
});

export const writeAction = (val) => ({
  type: WRITE_NUMBER,
  payload: val,
});

/* INITIAL STATE ------------------------------------------------------------ */
const initialState = {
  num: 0,
  newNumber: 0,
};

/* REDUCER ------------------------------------------------------------------ */
const countReducer = (state = initialState, action) => {
  console.log('ACTION : ', action);
  const { type, payload } = action;
  switch (type) {
    case INCREASE_NUMBER:
      return { num: state.num + payload, newNumber: state.newNumber };
    case DECREASE_NUMBER:
      return { num: state.num - 1, newNumber: state.newNumber };
    case WRITE_NUMBER:
      return { num: state.num, newNumber: payload };
    default:
      return state;
  }
};

export default countReducer;

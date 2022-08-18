import { useReducer } from 'react';

const UseReducerPrac1 = () => {
  /* ACTION TYPES ------------------------------------------------------------- */
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  /* ACTION CREATORS ---------------------------------------------------------- */
  const incrementAction = () => {
    console.log('DISPATCH INCREMENT');
    dispatch({
      type: INCREMENT,
    });
  };

  const decrementAction = () => {
    console.log('DISPATCH DECREMENT');
    dispatch({
      type: DECREMENT,
    });
  };

  /* INITIAL STATE ------------------------------------------------------------ */
  const initialState = 0;

  /* REDUCER ------------------------------------------------------------------ */
  const countReducer = (num = initialState, action) => {
    console.log('USE COUNTERREDUCER');
    switch (action.type) {
      case INCREMENT:
        return num + 1;
      case DECREMENT:
        return num - 1;
      default:
        return num;
    }
  };

  /* USEREDUCER --------------------------------------------------------------- */
  const [num, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h1>UseReducerPrac1</h1>
      <div>
        <button onClick={incrementAction}>PLUS</button>
        <h2>{num}</h2>
        <button onClick={decrementAction}>MINUS</button>
      </div>
    </div>
  );
};

export default UseReducerPrac1;

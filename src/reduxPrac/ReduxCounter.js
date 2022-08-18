import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction, writeAction } from './modules/counter';

const ReduxCounter = () => {
  const [inputNum, setInputNum] = useState('');

  // component에서 store를 조회할 때 react-redux가 제공하는 useSelector Hook 사용
  // const counterStore = useSelector((state) => state);
  // console.log(counterStore); // {counter: {num: 0}}
  const number = useSelector((state) => state.counter.num);
  const newNumber = useSelector((state) => state.counter.newNumber);
  console.log(number);
  console.log(newNumber);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(writeAction(inputNum));
    setInputNum('');
  };

  return (
    <div>
      <h1>ReduxCounter</h1>
      <div>
        <h2>{number}</h2>
        <button onClick={() => dispatch(increaseAction())}>PLUS</button>
        <button onClick={() => dispatch(decreaseAction())}>MINUS</button>
      </div>
      <div>
        <h2>{newNumber}</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInputNum(e.target.value)}
            type="text"
            value={inputNum}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ReduxCounter;

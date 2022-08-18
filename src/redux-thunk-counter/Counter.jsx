import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  counterActions,
  __addNumber,
} from 'redux-thunk-counter/redux/modules/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (e) => {
    const num = e.target.value;
    setNumber(+num);
  };

  // thunk 함수를 디스패치한다. payload는 thunk함수에 넣어주면,
  // 리덕스 모듈에서 payload로 받을 수 있다.
  const HandleAddNumber = () => {
    dispatch(__addNumber(number));
  };

  const HandleMinusNumber = () => dispatch(counterActions.minusNumber(number));

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={HandleAddNumber}>더하기</button>
      <button onClick={HandleMinusNumber}>빼기</button>
    </div>
  );
};

export default Counter;

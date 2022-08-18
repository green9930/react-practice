import { useState, useCallback } from 'react';

const UseCallbackPrac2 = () => {
  const [value, setValue] = useState('VALUE');

  const handleChange = () => {
    value === 'VALUE' ? setValue('VALUE CHANGED!!') : setValue('VALUE');
    console.log('VALUE CHANGED');
  };

  const logger = useCallback(() => {
    console.log('USECALLBACK : MEMOIZATION');
  }, []);

  // const logger = () => {
  //   console.log('USECALLBACK : MEMOIZATION');
  // };

  logger();
  return (
    <div>
      <h1>UseCallbackPrac</h1>
      <div>
        <h2>{value}</h2>
        <button onClick={handleChange}>CHANGE VALUE</button>
      </div>
      <UseCallbackChild logger={logger} />
    </div>
  );
};

const UseCallbackChild = ({ logger }) => {
  return (
    <div>
      <h2>UseCallbackChild</h2>
      <button onClick={logger}>CHECK CONSOLE</button>
    </div>
  );
};

export default UseCallbackPrac2;

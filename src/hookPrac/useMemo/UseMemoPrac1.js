import { useMemo, useState } from 'react';

const UseMemoPrac1 = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('');

  /* COUNTER ------------------------------------------------------------------ */
  const handlePlus = () => setNum(num + 1);
  const handleMinus = () => setNum(num - 1);

  const getNum = () => {
    console.log('GET NUMBER');
    return num;
  };

  /* REGISTER ----------------------------------------------------------------- */
  const showName = (text) => setName(text);

  const getName = (name) => {
    console.log('GET NAME');
    return name;
  };

  // USEMEMO 최적화O
  const givenName = useMemo(() => getName(name), [name]);
  // USEMEMO 최적화X
  // const givenName = getName(name);

  return (
    <div>
      <h1>UseMemoPrac1</h1>
      <Counter
        getNum={getNum}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
      />
      <span>==========</span>
      <Register givenName={givenName} showName={showName} />
    </div>
  );
};

const Counter = ({ getNum, handlePlus, handleMinus }) => {
  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <h2>{getNum()}</h2>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};

const Register = ({ showName, givenName }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showName(value);

    setValue('');
    console.log('SUBMIT REGISTER');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
      <h2>{givenName}</h2>
    </div>
  );
};

export default UseMemoPrac1;

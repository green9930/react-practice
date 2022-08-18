import { useCallback, useEffect, useState } from 'react';

const UseCallbackPrac1 = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [age, setAge] = useState('');

  const handleChangeName = (e) => {
    setText(e.target.value);
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    setName(text);
    setText('');
  };

  const handleChangeAge = (e) => {
    setNum(e.target.value);
  };

  const handleSubmitAge = (e) => {
    e.preventDefault();
    setAge(num);
    setNum('');
  };

  // const showProfile = () => {
  //   console.log(`NAME : ${name}`);
  //   return;
  // };
  const showProfile = useCallback(() => {
    console.log(`NAME : ${name}`);
    return;
  }, [name]);

  useEffect(() => {
    console.log('showProfile function Running..');
  }, [showProfile]);

  return (
    <div>
      <h1>UseCallbackPrac1</h1>
      <div>
        <form onSubmit={handleSubmitName}>
          <h2>ENTER YOUR NAME</h2>
          <input type="text" value={text} onChange={handleChangeName} />
          <button type="submit">SUBMIT</button>
        </form>
        <div>
          <span>{name}</span>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmitAge}>
          <h2>ENTER YOUR AGE</h2>
          <input type="text" value={num} onChange={handleChangeAge} />
          <button type="submit">SUBMIT</button>
        </form>
        <div>
          <span>{age}</span>
        </div>
      </div>
      <div>
        <button onClick={showProfile}>SHOW PROFILE</button>
      </div>
    </div>
  );
};

export default UseCallbackPrac1;

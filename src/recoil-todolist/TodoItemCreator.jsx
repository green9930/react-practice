import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./state/recoil";

const TodoItemCreator = () => {
  // 새로운 Todo를 만들기만 하기 때문에 useSetRecoilState 사용
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState); // write only

  const addTodo = () => {
    setTodoList((todoList) => [
      ...todoList,
      {
        id: todoList.length + 1,
        content: inputValue,
        isDone: false,
      },
    ]);
  };

  const onChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};

export default TodoItemCreator;

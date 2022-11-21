import { useRecoilState } from "recoil";
import { todoListState } from "./state/recoil";

const TodoItem = ({ item }) => {
  // Todo 값을 표현하는 동시에 텍스트 변경 및 삭제 가능
  // todoListState를 읽고, 업데이트하고, 완료된 항목으로 변경하고, 삭제하기 위한 setter 함수를 얻기 위해
  // useRecoilState 사용
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((todoItem) => todoItem === item);

  const { id, content, isDone } = item;

  const editItem = (e) => {
    const newTodoList = todoList.map((todo, idx) =>
      idx === index ? { ...todo, content: e.target.value } : todo
    );
    setTodoList(newTodoList);
  };

  const toggleItem = () => {
    const newTodoList = todoList.map((todo, idx) => {
      console.log(idx, index);
      return idx === index ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodoList(newTodoList);
  };

  const deleteItem = () => {
    const newTodoList = todoList.filter((todo, idx) => idx !== index);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <input type="text" value={content} onChange={editItem} />
      <input type="checkbox" checked={isDone} onChange={toggleItem} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;

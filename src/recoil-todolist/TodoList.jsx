import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./state/recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const A = () => {
  const requestSuggestions = async (name, func) => {
    console.log("REQUEST TEST");
    console.log(name);
    await func(["hello"]);
  };
  console.log("TEST");
  return <TodoList requestSuggestions={requestSuggestions} />;
};

const TodoList = (props) => {
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (name !== undefined) {
      // console.log(props.requestSuggestions);
      props.requestSuggestions(name, setSuggestions);
    }
    setName("10");
  }, [name]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  console.log(suggestions);

  return (
    <div>
      <label htmlFor="search">Product name</label>
      <input onChange={onChange} id="search" list="suggestions"></input>
      <datalist id="suggestions">
        {suggestions.map((suggestion) => (
          <option>{suggestion}</option>
        ))}
      </datalist>
    </div>
  );

  // const todoList = useRecoilValue(todoListState); // read only

  // return (
  //   <div>
  //     <h2>TODOLIST</h2>
  //     <TodoListFilters />
  //     <TodoListStats />
  //     <TodoItemCreator />
  //     {todoList.map((todo) => (
  //       <TodoItem key={todo.id} item={todo} />
  //     ))}
  //   </div>
  // );
};

export default A;

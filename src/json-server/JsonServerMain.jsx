import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios import 합니다.

const JsonServerMain = () => {
  // 새롭게 생성하는 todo를 관리하는 state
  const [todo, setTodo] = useState({
    title: '',
  });
  const [todos, setTodos] = useState([]);
  // patch에서 사용할 id, 수정값의 state를 추가
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({
    title: '',
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
    // data: Array(1)
    // 0: {id: 1, title: 'json-server', content: 'json-server를 배워봅시다.'}
    // length: 1
    // [[Prototype]]: Array(0)
    // headers:
    // cache-control: "no-cache"
    // content-length: "101"
    // content-type: "application/json; charset=utf-8"
    // expires: "-1"
    // pragma: "no-cache"
    // [[Prototype]]: Object
    // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    // status: 200
    // statusText: "OK"
    setTodos(data);
  };

  const handleSubmitTodo = (e) => {
    // 👇 submit했을 때 브라우저의 새로고침을 방지합니다.
    e.preventDefault();
    axios.post('http://localhost:3001/todos', todo);
    fetchTodos();
  };

  const handleDeleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`);
    fetchTodos();
  };

  const handleEditTodo = (todoId, edit) => {
    axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
    fetchTodos();
  };

  const handleChange = (e) => {
    const target = e.target.value;
    setTodo({
      ...todo,
      title: target,
    });
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmitTodo}>
        {/* 👇 수정기능에 필요한 id, 수정값 input2개와 수정하기 버튼을 추가 */}
        <div>
          <input
            type="text"
            placeholder="수정하고싶은 Todo ID"
            onChange={(e) => setTargetId(e.target.value)}
          />
          <input
            type="text"
            placeholder="수정값 입력"
            onChange={(e) =>
              setEditTodo({
                ...editTodo,
                title: e.target.value,
              })
            }
          />
          <button
            // type='button' 을 추가해야 form의 영향에서 벗어남
            type="button"
            onClick={() => handleEditTodo(targetId, editTodo)}
          >
            수정하기
          </button>
        </div>
        <input type="text" onChange={handleChange} />
        <button>추가하기</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {/* todo의 아이디를 화면에 표시 */}
            {todo.id} :{todo.title}
            {/*  디자인이 요상하긴 하지만..! 삭제 버튼 추가 */}
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default JsonServerMain;

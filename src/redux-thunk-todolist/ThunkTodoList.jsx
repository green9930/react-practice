import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteTodos,
  __getTodos,
  __postTodos,
  __updateTodos,
} from 'redux-thunk-todolist/redux/modules/todosSlice';

const ThunkTodoList = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    name: '',
    title: '',
    content: '',
  });
  const [selectedId, setSelectedId] = useState(null);

  const todolist = useSelector((state) => state.todos);
  const { error, isLoading, todos } = todolist;

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(__postTodos(todo));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const target = todos.find((todo) => todo.id === selectedId);
    const revisedTodo = { ...target, content: todo.content };

    dispatch(__updateTodos(revisedTodo));
    setSelectedId(null);
  };

  const handleDelete = (id) => dispatch(__deleteTodos(id));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <div>
      {error ? (
        <div>{error.message}</div>
      ) : (
        <div>
          {isLoading ? (
            <div>로딩 중...</div>
          ) : (
            <div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="todo-name">이름</label>
                    <input
                      name="name"
                      type="text"
                      id="todo-name"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="todo-title">제목</label>
                    <input
                      name="title"
                      type="text"
                      id="todo-title"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="todo-content">내용</label>
                    <input
                      name="content"
                      type="text"
                      id="todo-content"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit">SUBMIT</button>
                </form>
              </div>
              <div>
                {todos.map((todo) => {
                  const { id, name, title, content } = todo;
                  return (
                    <div key={id}>
                      <div>
                        <span>
                          이름 : {name} | ID : {id}
                        </span>
                      </div>
                      <div>
                        <span>제목 : {title} | </span>
                        {selectedId === id ? (
                          <form onSubmit={handleSave}>
                            <label htmlFor="todo-content">내용</label>
                            <input
                              name="content"
                              type="text"
                              id="todo-content"
                              onChange={handleChange}
                              placeholder={content}
                            />
                            <button type="submit">SAVE</button>
                          </form>
                        ) : (
                          <>
                            <span>내용 : {content}</span>
                            <button onClick={() => setSelectedId(id)}>
                              EDIT
                            </button>
                          </>
                        )}
                        <button onClick={() => handleDelete(id)}>DELETE</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ThunkTodoList;

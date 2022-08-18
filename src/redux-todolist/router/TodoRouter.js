import { Routes, Route } from 'react-router-dom';
import TodoListPage from 'redux-todolist/pages/TodoListPage';
import TodoDetailPage from 'redux-todolist/pages/TodoDetailPage';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/detail/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default TodoRouter;

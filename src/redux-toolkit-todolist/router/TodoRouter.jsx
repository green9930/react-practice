import { Route, Routes } from 'react-router-dom';
import TodoDetailPage from 'redux-toolkit-todolist/pages/TodoDetailPage';
import TodoListPage from 'redux-toolkit-todolist/pages/TodoListPage';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/detail/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default TodoRouter;

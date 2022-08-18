import { Routes, Route } from 'react-router-dom';
import LandingPage from 'sparta-todolist/pages/LandingPage';
import TodoDetailPage from 'sparta-todolist/pages/TodoDetailPage';
import TodoFormPage from 'sparta-todolist/pages/TodoFormPage';
import TodoListPage from 'sparta-todolist/pages/TodoListPage';

const TodoRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/todo/add" element={<TodoFormPage />} />
      <Route path="/todos" element={<TodoListPage />} />
      <Route path="/todos/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default TodoRouter;

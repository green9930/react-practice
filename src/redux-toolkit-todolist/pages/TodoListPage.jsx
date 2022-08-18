import { useSelector } from 'react-redux';
import Form from 'redux-toolkit-todolist/components/Form';
import Layout from 'redux-toolkit-todolist/components/layout/Layout';
import TodoList from 'redux-toolkit-todolist/components/TodoList';

function TodoListPage() {
  // console.log('RENDERING TODOLISTPAGE');
  const todolist = useSelector((state) => state.todos);
  console.log(todolist);

  return (
    <Layout>
      <Form todolist={todolist} />
      <TodoList todolist={todolist} />
    </Layout>
  );
}

export default TodoListPage;

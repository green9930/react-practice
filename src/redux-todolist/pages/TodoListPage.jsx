import Layout from 'redux-todolist/components/Layout';
import Form from 'redux-todolist/components/Form';
import List from '../redux-todolist/components/TodoList';
import { useSelector } from 'react-redux';

function TodoListPage() {
  console.log('RENDERING TODOLISTPAGE');

  const todolist = useSelector((state) => state.todos);
  console.log(todolist);

  return (
    <Layout>
      <Form todolist={todolist} />
      <List todolist={todolist} />
    </Layout>
  );
}

export default TodoListPage;

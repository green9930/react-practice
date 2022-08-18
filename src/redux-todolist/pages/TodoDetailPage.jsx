import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from 'redux-todolist/components/Layout';
import TodoDetail from 'redux-todolist/components/TodoDetail';
import styled from 'styled-components';

const TodoDetailPage = () => {
  console.log('RENDERING TODODETAILPAGE');

  const navigate = useNavigate();
  const { id } = useParams();

  const todo = useSelector((state) => state.todos).find(
    (todo) => todo.id === parseInt(id)
  );

  console.log(todo);
  return (
    <Layout>
      <TodoDetailContainer>
        <TodoDetail todo={todo} />
        <StyledMoveBtn onClick={() => navigate('/')}>
          Go to Main Page
        </StyledMoveBtn>
      </TodoDetailContainer>
    </Layout>
  );
};

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledMoveBtn = styled.button`
  height: 40px;
  width: 45%;
  border: none;
  border-radius: 8px;
  background-color: '#b1b1b1';
  cursor: pointer;
  -moz-transition: color 0.2s ease;
  -o-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
  font-weight: 600;
`;

export default TodoDetailPage;

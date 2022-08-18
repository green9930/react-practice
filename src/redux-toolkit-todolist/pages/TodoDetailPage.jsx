import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from 'redux-toolkit-todolist/components/layout/Layout';
import TodoDetail from 'redux-toolkit-todolist/components/TodoDetail';
import styled from 'styled-components';

const TodoDetailPage = () => {
  // console.log('RENDERING TODODETAILPAGE');
  const { id } = useParams();
  const navigate = useNavigate();

  const todoItem = useSelector((state) => state.todos).find(
    (todo) => todo.id === parseInt(id)
  );

  return (
    <Layout>
      <TodoDetailContainer>
        <TodoDetail todoItem={todoItem} />
        <StyledMoveBtn onClick={() => navigate('/')}>
          Go to Todo List
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

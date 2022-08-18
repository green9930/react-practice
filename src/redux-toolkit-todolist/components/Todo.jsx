import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { todoActions } from 'redux-toolkit-todolist/redux/modules/todosSlice';
import styled from 'styled-components';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, content, isDone } = todo;

  return (
    <StyledTodo>
      <StyledMoveBtn onClick={() => navigate(`/detail/${id}`)}>
        상세보기👀
      </StyledMoveBtn>
      <h3>{title}</h3>
      <StyledContent>{content}</StyledContent>
      <BtnContainer>
        <StyledTodoBtn
          color="delete"
          // 매개변수로 넘겨준 값은 알아서 payload 값으로 들어감
          onClick={() => dispatch(todoActions.deleteTodo(id))}
        >
          삭제하기
        </StyledTodoBtn>
        <StyledTodoBtn
          color={isDone ? 'cancel' : 'done'}
          onClick={() => dispatch(todoActions.updateTodo(id))}
        >
          {isDone ? '취소' : '완료'}
        </StyledTodoBtn>
      </BtnContainer>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  position: relative;
  width: 300px;
  height: 180px;
  padding: 12px;
  border: 4px solid teal;
  border-radius: 12px;

  h3 {
    margin: 10px;
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledMoveBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 15px;
  background: #e9be00;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
`;

const StyledContent = styled.span`
  display: inline-block;
  width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 25px 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledTodoBtn = styled.button`
  height: 40px;
  width: 45%;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  -moz-transition: color 0.2s ease;
  -o-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;

  :hover,
  :focus {
    border: 2px solid
      ${({ color }) => {
        if (color === 'cancel') {
          return `#f10000`;
        } else if (color === 'done') {
          return `#008080`;
        } else {
          return 'transparent';
        }
      }};
    background-color: ${({ color }) =>
      color === 'delete' ? '#999999' : 'transparent'};
  }
`;

export default Todo;

import styled from 'styled-components';
import Button from 'sparta-todolist/components/elements/Button';
import TodoContent from 'sparta-todolist/components/TodoContent';

const TodoViewer = ({ todo, handleIsEdit }) => {
  return (
    <TodoViewerContainer>
      <TodoContent todo={todo} />
      <ButtonContainer>
        <Button size="large" clickHandler={handleIsEdit}>
          수정하기
        </Button>
      </ButtonContainer>
    </TodoViewerContainer>
  );
};

export default TodoViewer;

const TodoViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
`;

const ButtonContainer = styled.div`
  margin: 20px;
  padding: 0 30%;
`;

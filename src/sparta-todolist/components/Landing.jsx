import styled from 'styled-components';
import LandingComponent from 'sparta-todolist/components/LandingComponent';

function Landing() {
  return (
    <div>
      <TodoListTitle>무엇을 할까요?</TodoListTitle>
      <LandingComponent text="할일 기록하기" navigateTarget="/todo/add" />
      <LandingComponent text="TODO LIST" navigateTarget="/todos" />
    </div>
  );
}

export default Landing;

const TodoListTitle = styled.h1`
  font-size: 32px;
  margin: 30px 20px;
`;

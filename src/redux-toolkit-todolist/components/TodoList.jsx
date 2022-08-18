import Todo from 'redux-toolkit-todolist/components/Todo';
import styled from 'styled-components';

const TodoList = ({ todolist }) => {
  return (
    <ListContainer>
      <UlContainer>
        <h2>Working...🔥</h2>
        <StyledUl>
          {todolist
            .filter((val) => !val.isDone)
            .map((todo) => {
              return (
                <StyledLi key={todo.id}>
                  <Todo todo={todo} />
                </StyledLi>
              );
            })}
        </StyledUl>
      </UlContainer>
      <UlContainer>
        <h2>Done..!👍</h2>
        <StyledUl>
          {todolist
            .filter((val) => val.isDone)
            .map((todo) => {
              return (
                <StyledLi key={todo.id}>
                  <Todo todo={todo} />
                </StyledLi>
              );
            })}
        </StyledUl>
      </UlContainer>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const UlContainer = styled.div`
  min-height: 100px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
`;

const StyledLi = styled.li`
  margin: 0 15px 15px 0;
`;

export default TodoList;

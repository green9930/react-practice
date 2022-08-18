import styled from 'styled-components';

const TodoDetail = ({ todo }) => {
  const { id, title, content, isDone } = todo;

  return (
    <TodoDetailContainer isDone={isDone}>
      <div>
        <span>(Todo No.</span>
        <span>{id})</span>
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </TodoDetailContainer>
  );
};

const TodoDetailContainer = styled.div`
  width: 50%;
  margin: 50px 0;
  padding: 30px 30px 50px 30px;
  background-color: ${({ isDone }) => (isDone ? `#f1f1f1` : `transparent`)};
  border: 2px solid ${({ isDone }) => (isDone ? `#008080` : `#f10000`)};
  border-radius: 10px;

  h2 {
    margin: 20px 0;
  }
`;

export default TodoDetail;

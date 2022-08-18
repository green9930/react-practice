import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TodoComment from 'sparta-todolist/components/TodoComment';
import TodoEditor from 'sparta-todolist/components/TodoEditor';
import Loading from 'sparta-todolist/components/Loading';
import ErrorMessage from 'sparta-todolist/components/ErrorMessage';
import TodoViewer from 'sparta-todolist/components/TodoViewer';
import { __readTodos } from 'sparta-todolist/redux/modules/todosSlice';

const TodoDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === parseInt(id));

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  const handleIsEdit = () => setIsEdit(!isEdit);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <>
      {todo ? (
        <TodoDetailContainer>
          {isEdit ? (
            <TodoEditor todo={todo} handleIsEdit={handleIsEdit} />
          ) : (
            <TodoViewer todo={todo} handleIsEdit={handleIsEdit} />
          )}
          {!isEdit && <TodoComment todoId={todo.id} />}
        </TodoDetailContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TodoDetail;

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
`;

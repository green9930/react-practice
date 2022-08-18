import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Comment from 'sparta-todolist/components/Comment';
import Loading from 'sparta-todolist/components/Loading';
import ErrorMessage from 'sparta-todolist/components/ErrorMessage';
import { __readComments } from 'sparta-todolist/redux/modules/commentsSlice';

const TodoCommentList = ({ targetId }) => {
  const dispatch = useDispatch();

  const commentList = useSelector((state) => state.comments);
  const { comments, isLoading, error } = commentList;

  useEffect(() => {
    dispatch(__readComments());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <TodoCommentListContainer>
      <div>
        {comments
          .filter((val) => val.todoId === targetId)
          .map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </TodoCommentListContainer>
  );
};

export default TodoCommentList;

const TodoCommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

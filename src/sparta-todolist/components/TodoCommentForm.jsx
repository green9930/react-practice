import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'sparta-todolist/components/elements/Button';
import Input from 'sparta-todolist/components/elements/Input';
import { __createComments } from 'sparta-todolist/redux/modules/commentsSlice';
import useInput from 'sparta-todolist/hooks/useInput';
import formValidator from 'sparta-todolist/utils/formValidator';
import { useState } from 'react';

const TodoCommentForm = ({ todoId }) => {
  const dispatch = useDispatch();
  const [inputCommentName, getChangedCommentName, resetName] = useInput('');
  const [inputComment, getChangedComment, resetComment] = useInput('');
  /* ALERT MESSAGE ------------------------------------------------------------ */
  const [nameAlert, setNameAlert] = useState('');
  const [commentAlert, setCommentAlert] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const nameResult = formValidator('name', inputCommentName);
    const commentResult = formValidator('comment', inputComment);

    if (nameResult.verify && commentResult.verify) {
      dispatch(
        __createComments({
          todoId: todoId,
          name: inputCommentName,
          commentText: inputComment,
        })
      );

      resetName();
      resetComment();
      setNameAlert('');
      setCommentAlert('');
    } else {
      setNameAlert(nameResult.message);
      setCommentAlert(commentResult.message);
    }
  };

  return (
    <TodoCommentFormContainer>
      <form onSubmit={handleSubmitComment}>
        <InputContainer>
          <NameContainer>
            <Input
              value={inputCommentName}
              id="commentName"
              name="commentName"
              placeholder="이름(1~5자)"
              width="100%"
              labelText="이름"
              isHide={true}
              changeHandler={getChangedCommentName}
              maxLength="5"
              minLength="1"
            />
          </NameContainer>
          <CommentContainer>
            <Input
              value={inputComment}
              id="commentContent"
              name="commentContent"
              placeholder="댓글을 추가하세요(1~30자)"
              width="100%"
              labelText="댓글"
              isHide={true}
              changeHandler={getChangedComment}
              minLength="1"
              maxLength="30"
            />
          </CommentContainer>
        </InputContainer>
        <Button size="small" type="submit">
          추가
        </Button>
      </form>
      <AlertMessageContainer>
        <span>{nameAlert}</span>
        <span>{commentAlert}</span>
      </AlertMessageContainer>
    </TodoCommentFormContainer>
  );
};

export default TodoCommentForm;

const TodoCommentFormContainer = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 40px;

    input {
      width: 100%;
    }

    button {
      flex-grow: 1;
    }
  }
`;

const InputContainer = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const NameContainer = styled.div`
  width: 150px;
`;

const CommentContainer = styled.div`
  flex-grow: 1;
  width: 500px;
`;

const AlertMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

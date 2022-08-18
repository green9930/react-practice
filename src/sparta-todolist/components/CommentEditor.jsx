import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from 'sparta-todolist/components/elements/Input';
import Button from 'sparta-todolist/components/elements/Button';
import { __updateComments } from 'sparta-todolist/redux/modules/commentsSlice';
import useInput from 'sparta-todolist/hooks/useInput';
import editValidator from 'sparta-todolist/utils/editValidator';
import { useState } from 'react';

const CommentEditor = ({ comment, handleToggleCommentEditor }) => {
  const dispatch = useDispatch();

  const { todoId, name, commentText, id } = comment;

  const [newComment, setNewComment, commentReset] = useInput(commentText);
  const [alertMessage, setAlertMessage] = useState('');

  const handleUpdateComment = () => {
    const result = editValidator('comment', newComment, commentText);

    if (result.verify) {
      dispatch(__updateComments({ id: id, commentText: newComment }));
      commentReset();
      handleToggleCommentEditor();
    } else {
      setAlertMessage(result.message);
    }
  };

  return (
    <>
      <CommentEditorWrapper>
        <Input
          id="commentEditor"
          name="commentEditor"
          isHide={true}
          value={commentText}
          changeHandler={setNewComment}
          width="500px"
        />
        <AlertMessageContainer>
          <span>{alertMessage}</span>
        </AlertMessageContainer>
      </CommentEditorWrapper>
      <CommentBtnWrapper>
        <Button variant="normal" clickHandler={handleToggleCommentEditor}>
          취소
        </Button>
        <Button variant="normal" clickHandler={handleUpdateComment}>
          저장
        </Button>
      </CommentBtnWrapper>
    </>
  );
};

export default CommentEditor;

const CommentEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -15px;
`;

const AlertMessageContainer = styled.div`
  margin-left: 10px;
`;

const CommentBtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

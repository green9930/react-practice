import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'sparta-todolist/components/elements/Button';
import TodoTextarea from 'sparta-todolist/components/elements/TodoTextarea';
import { __updateTodos } from 'sparta-todolist/redux/modules/todosSlice';
import useInput from 'sparta-todolist/hooks/useInput';
import editValidator from 'sparta-todolist/utils/editValidator';
import { useState } from 'react';
import { colors } from 'sparta-todolist/theme/theme';

const TodoEditor = ({ todo, handleIsEdit }) => {
  const dispatch = useDispatch();
  const [textContent, getChangedTextContent] = useInput(todo.content);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = editValidator('content', textContent, todo.content);

    if (result.verify) {
      dispatch(__updateTodos({ id: todo.id, content: textContent }));
      handleIsEdit();
    } else {
      setAlertMessage(result.message);
    }
  };

  return (
    <TodoEditorContainer>
      <LinkContainer onClick={handleIsEdit}>
        <span>이전으로</span>
      </LinkContainer>
      <form onSubmit={handleSubmit}>
        <TextareaContainer>
          <TodoTextarea
            defaultValue={todo.content}
            isHide={true}
            changeHandler={getChangedTextContent}
          />
        </TextareaContainer>
        <ButtonContainer>
          <Button children="저장하기" size="large" type="submit" />
          <AlertMessageContainer>
            <span>{alertMessage}</span>
          </AlertMessageContainer>
        </ButtonContainer>
      </form>
    </TodoEditorContainer>
  );
};

export default TodoEditor;

const TodoEditorContainer = styled.div`
  margin: 40px;

  textarea {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  text-align: right;
  padding-bottom: 30px;
  cursor: pointer;
`;

const TextareaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 0 30%;
`;

const AlertMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  span {
    color: ${colors.red};
    font-weight: 600;
  }
`;

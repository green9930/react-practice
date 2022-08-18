import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodoAction } from 'redux-todolist/redux/modules/todos';
import styled from 'styled-components';

const Form = ({ todolist }) => {
  const lastId = todolist.length ? todolist[todolist.length - 1].id + 1 : 1;
  const nextId = useRef(lastId);
  const [todo, setTodo] = useState({
    id: nextId.current,
    title: '',
    content: '',
    isDone: false,
  });
  const [alertMessage, setAlertMessage] = useState('');

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    const { title, content } = todo;

    /* FORM 공백 방지 --------------------------------------------------------------- */
    if (title.trim() === '' && content.trim() === '') {
      handleAlertAll();
    } else if (title.trim() === '') {
      handleAlert('title');
      setTodo({
        ...todo,
        content: content,
      });
    } else if (content.trim() === '') {
      handleAlert('content');
      setTodo({
        ...todo,
        title: title,
      });
    } else {
      dispatch(createTodoAction(todo));
      setAlertMessage('');
      setTodo({
        id: (nextId.current += 1),
        title: '',
        content: '',
        isDone: false,
      });
    }
  };

  const handleAlert = (name) => {
    name === 'title'
      ? setAlertMessage(`제목을 입력해주세요.`)
      : setAlertMessage(`내용을 입력해주세요.`);
  };

  const handleAlertAll = () => {
    setAlertMessage(`제목과 내용을 모두 입력해주세요.`);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmitTodo}>
        <InputContainer>
          <InputWrapper>
            <label htmlFor="input-title">제목</label>
            <input
              id="input-title"
              type="text"
              name="title"
              placeholder="제목을 입력해주세요(12자 이하)"
              maxLength={12}
              value={todo.title}
              onChange={onChangeInput}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="input-content">내용</label>
            <input
              id="input-content"
              type="text"
              name="content"
              placeholder="내용을 입력해주세요(80자 이하)"
              maxLength={80}
              value={todo.content}
              onChange={onChangeInput}
            />
          </InputWrapper>
          <StyledAlert>
            <span>{alertMessage}</span>
          </StyledAlert>
        </InputContainer>
        <TodoSubmitBtn type="submit">추가하기</TodoSubmitBtn>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  width: 100%;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 0 0 10px 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const InputWrapper = styled.div`
  label {
    font-weight: 600;
    margin: 0 10px;
  }

  input {
    flex-grow: 1;
    min-width: 200px;
    padding: 10px 10px 10px;
    border: 1px solid #a8a8a8;

    :hover,
    :focus {
      border: 1px solid #008080;
      outline: none;
    }

    ::placeholder {
      font-size: 14px;
    }
  }
`;

const StyledAlert = styled.div`
  margin-left: 10px;
`;

const TodoSubmitBtn = styled.button`
  background-color: #008080;
  color: #ffffff;
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  -moz-transition: color 0.2s ease;
  -o-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;

  :hover,
  :focus {
    background-color: #ffffff;
    color: #008080;
  }
`;

export default Form;

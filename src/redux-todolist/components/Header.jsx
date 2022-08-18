import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Todo List</h1>
      <h2>React</h2>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  width: 100%;
  padding: 20px;
  border: 1px solid #dddddd;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export default Header;

import styled from 'styled-components';
import Header from 'redux-todolist/components/Header';

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Header />
      {props.children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;

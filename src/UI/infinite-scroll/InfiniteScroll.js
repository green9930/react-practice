import { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfiniteScrollItems from './InfiniteScrollItems';
import { getPassengersData } from './api';

const HeaderContainer = styled.div`
  background: #000000;
  padding: 20px;

  h1 {
    margin: 0;
    color: #ffffff;
  }
`;
const MainContainer = styled.ul`
  padding: 0 20px;
`;

const InfiniteScroll = () => {
  const [newPassengersData, setNewPassengersData] = useState([]);
  const [page, setPage] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const loadData = async (page) => {
      try {
        const response = await fetch(getPassengersData(page));
        const json = await response.json();
        const newData = [...newPassengersData, ...json.data];
        setNewPassengersData(newData);
        setInit(true);
      } catch (error) {
        console.error(error);
      }
    };

    loadData(page);
  }, [page]);

  const onScrollHandler = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    clientHeight + scrollTop >= scrollHeight - 200 && setPage(page + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  });

  return (
    <div>
      <HeaderContainer>
        <h1>Motion Labs</h1>
      </HeaderContainer>
      {init ? (
        <MainContainer>
          <h2>Passenger List</h2>
          {newPassengersData.map((data) => {
            const airlineData = { ...data.airline[0] };
            return (
              <InfiniteScrollItems
                key={data._id}
                data={data}
                airlineData={airlineData}
              />
            );
          })}
        </MainContainer>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default InfiniteScroll;

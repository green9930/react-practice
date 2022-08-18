import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
  list-style: none;
  border-top: 1px solid #f2f2f2;
  text-align: right;
`;

const PassengerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  p {
    margin: 0;
    display: inline-block;
  }
`;

const AirlineContainer = styled.div`
  display: flex;
  background: #f2f2f2;
  padding: 20px;

  span {
    margin-left: 10px;
  }
`;

const LogoContainer = styled.div`
  width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PassengerId = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #d3d3d3;
  margin: 10px 0;
`;

const InfiniteScrollItems = ({ data, airlineData }) => {
  return (
    <ItemContainer>
      <PassengerContainer>
        <span>{data.name ? data.name : ''}</span>
        <span>{data.trips} trips</span>
      </PassengerContainer>
      <AirlineContainer>
        <LogoContainer>
          <img src={airlineData.logo} alt="airline logo" />
        </LogoContainer>
        <span>{airlineData.slogan}</span>
      </AirlineContainer>
      <PassengerId>{data._id}</PassengerId>
    </ItemContainer>
  );
};

export default InfiniteScrollItems;

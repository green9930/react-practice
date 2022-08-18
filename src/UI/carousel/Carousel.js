import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Item from './Item';

const CarouselStyle = styled.div`
  overflow: hidden;
  width: 90%;
  margin: auto;
  * {
    box-sizing: border-box;
  }

  .carousel {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
`;

const Carousel = () => {
  const totalItems = 5;
  const [current, setCurrent] = useState(0);

  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);

  // 다음 슬라이드로 이동
  const moveNext = () => {
    if (!isMoving.current) {
      if (current === totalItems - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  // 이전 슬라이드로 이동
  const movePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(totalItems - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const ItemList = Array(totalItems)
    .fill()
    .map((_, index) => {
      const key = `item_${index}`;

      // prev와 next 상태를 작성
      // current가 첫번째 요소이면 마지막 요소(totalItems - 1)로 이동한다.
      const prev = current === 0 ? totalItems - 1 : current - 1;
      // current가 마지막 요소이면 첫번째 요소(0)로 이동한다.
      const next = current === totalItems - 1 ? 0 : current + 1;

      return (
        <Item
          src={`https://picsum.photos/id/${index}/1600/900`}
          key={key}
          active={index === current}
          prev={index === prev}
          next={index === next}
        />
      );
    });

  console.log(ItemList);
  return (
    <CarouselStyle>
      <div className="carousel">
        {ItemList}
        <Button prev handleSlide={movePrev} />
        <Button next handleSlide={moveNext} />
      </div>
    </CarouselStyle>
  );
};

export default Carousel;

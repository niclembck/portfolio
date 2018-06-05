import React from 'react';
import styled from 'styled-components';

const Bike = (props) => {
  return (
    <Container>
      <BikeBody>
        <LeftTopBar />
        <LeftBottomBar />
        <LeftBar />
        <TopBar />
        <BottomBar />
        <RightBar />
        <Saddle />
        <HandleBar />
      </BikeBody>
      <WheelContainer>
        <LeftWheel />
        <RightWheel />
      </WheelContainer>
    </Container>
  );
};

export default Bike;

const frameColor = '#80cbc1';
const handleColor = '#d6673e';
const tireColor = '#38394a';
const barWidth = '12px';

const Container = styled.div`
  position: relative;
`;
const BikeBody = styled.div`
  position: relative;
  top: 0;
  left: 115px;
  z-index: 1;
`;
const Bar = styled.div`
  width: ${barWidth};
  position: absolute;
  background-color: ${frameColor};
`;
const LeftTopBar = Bar.extend`
  width: 10px;
  height: 175px;
  left: 19px;
  top: 88px;
  transform: rotate(25deg);
`;
const LeftBottomBar = Bar.extend`
  width: 8px;
  height: 130px;
  left: 38px;
  top: 201px;
  transform: rotate(-85deg);
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${tireColor};
    position: absolute;
    top: -5px;
    left: -4px;
  }
`;
const LeftBar = Bar.extend`
  height: 270px;
  left: 70px;
  top: 10px;
  transform: rotate(-15deg);
`;
const TopBar = Bar.extend`
  height: 224px;
  left: 163px;
  top: -10px;
  transform: rotate(90deg);
`;
const BottomBar = Bar.extend`
  height: 250px;
  left: 190px;
  top: 60px;
  transform: rotate(45deg);
`;
const RightBar = Bar.extend`
  height: 230px;
  left: 295px;
  top: 40px;
  transform: rotate(163deg);
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${tireColor};
    position: absolute;
    top: -5px;
    left: -4px;
  }
`;
const Saddle = styled.div`
  position: absolute;
  width: 90px;
  height: ${barWidth};
  top: 0px;
  border-color: transparent transparent transparent ${handleColor};
  border-radius: 0 0 0 20px;
  border-width: 10px;
  border-style: solid;
`;
const HandleBar = styled.div`
  position: absolute;
  width: 80px;
  height: ${barWidth};
  top: 40px;
  left: 252px;
  border-color: transparent transparent transparent ${handleColor};
  border-radius: 0 0 0 20px;
  border-width: 10px;
  border-style: solid;
  transform: rotate(180deg);
  &:after {
    content: '';
    width: 90px;
    height: ${barWidth};
    top: 0px;
    left: -21px;
    border-color: transparent transparent transparent ${handleColor};
    border-radius: 0 0 0 20px;
    border-width: 10px;
    border-style: solid;
    transform: rotate(40deg);
    position: absolute;
  }
`;
const WheelContainer = styled.div`
  position: relative;
`;
const Wheel = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 155px;
  border-radius: 100%;
  border: 10px solid ${tireColor};

  &:before {
    content: '';
    width: 160px;
    height: 160px;
    border-radius: 100%;
    border: 4px solid ${handleColor};
    position: absolute;
    left: 6px;
    top: 6px;
  }
`;
const LeftWheel = Wheel.extend`
  left: 0px;
`;
const RightWheel = Wheel.extend`
  left: 345px;
`;

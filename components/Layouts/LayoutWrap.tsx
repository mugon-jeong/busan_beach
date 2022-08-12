import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.color.coral};
  font-size: 16px;
  position: relative;
  &::before {
    width: 60%;
    height: 60%;
    content: '';
    background: url('/asset/img/bgimg_tube_clear.png');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 15%;
    left: 5%;
    z-index: -999;
  }

  @media (max-width: ${props => props.theme.deviceSizes.pc}) {
    width: 96%;
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 100%;
    height: inherit;
    flex-direction: column;
    font-size: 15px;
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 100%;
    height: auto;
    flex-direction: column;
    font-size: 14px;
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
    width: 100%;
    flex-direction: column;
    font-size: 13px;
  }
`;

const LayoutWrap = (props: any) => {
  return <Wrap>{props.children}</Wrap>;
};

export default LayoutWrap;

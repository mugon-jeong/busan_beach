import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Wrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.color.white};
  font-size: 16px;
  position: relative;

  &::before {
    width: 60%;
    height: 60%;
    content: '';
    /* background: url('/asset/img/tube.svg'); */
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
  const router = useRouter();
  const [posX, setPosX] = useState(0);

  return (
    <Wrap
      onMouseDown={e => {
        setPosX(e.pageX);
      }}
      onMouseUp={e => {
        if (e.pageX > posX + window.outerWidth / 1.8) {
          router.back();
        }
      }}
      onTouchStart={e => {
        setPosX(e.changedTouches[0].pageX);
      }}
      onTouchEnd={e => {
        if (e.changedTouches[0].pageX > posX + (window.outerWidth - window.outerWidth / 9)) {
          router.back();
        }
      }}
    >
      {props.children}
    </Wrap>
  );
};

export default LayoutWrap;

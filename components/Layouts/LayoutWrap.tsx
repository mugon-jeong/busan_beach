import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.coral};
  font-size: 16px;

  @media ${({ theme }) => theme.device.pc} {
    width: 100%;
    background-color: coral;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: inherit;
    background-color: ${({ theme }) => theme.color.deepCoral};
    flex-direction: column;
    font-size: 15px;
  }

  @media ${({ theme }) => theme.device.mobile13P} {
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.color.blue};
    flex-direction: column;
    font-size: 14px;
  }

  @media ${({ theme }) => theme.device.mobileSE} {
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
    flex-direction: column;
    font-size: 13px;
  }
`;

const LayoutWrap = (props: any) => {
  return <Wrap>{props.children}</Wrap>;
};

export default LayoutWrap;

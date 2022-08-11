import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.color.coral};
  font-size: 16px;

  @media (max-width: ${props => props.theme.deviceSizes.pc}) {
    width: 96%;
    background-color: ${props => props.theme.color.coral};
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 100%;
    height: inherit;
    background-color: ${({ theme }) => theme.color.deepCoral};
    flex-direction: column;
    font-size: 15px;
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.color.blue};
    flex-direction: column;
    font-size: 14px;
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
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

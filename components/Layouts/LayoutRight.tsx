import React from 'react';
import styled from '@emotion/styled';

const Layout = styled.div`
  width: 35rem;
  height: 100vh;
  padding: 1%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: ${props => props.theme.deviceSizes.pc}) {
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 100%;
    height: 100%;
    padding: 1.2rem 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    overflow-y: inherit;
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const LayoutLeft = (props: any) => {
  return <Layout>{props.children}</Layout>;
};

export default LayoutLeft;

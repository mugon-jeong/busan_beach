import type { NextPage } from 'next';
import { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const Wrap = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  padding: 80px 0;
  color: ${({ theme }) => theme.color.coral};

  @media ${({ theme }) => theme.device.pc} {
    width: 100%;
    background-color: coral;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    background-color: ${({ theme }) => theme.color.deepCoral};
    flex-direction: column;
  }

  @media ${({ theme }) => theme.device.mobile13P} {
    width: 100%;
    background-color: ${({ theme }) => theme.color.blue};
    flex-direction: column;
  }

  @media ${({ theme }) => theme.device.mobileSE} {
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
    flex-direction: column;
  }
`;

const Layout = styled.div`
  width: 30rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${({ theme }) => theme.device.pc} {
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media ${({ theme }) => theme.device.mobile13P} {
    width: 100%;
    padding: 24px 16px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media ${({ theme }) => theme.device.mobileSE} {
    width: 100%;
    padding: 24px 16px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const TemplateLeft = styled.div`
  width: 100%;
`;

const TemplateRight = styled.div`
  width: 100%;
`;

const Template = styled.div`
  width: 100%;
`;

const ComponentBox = styled.div`
  width: 14.5rem;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const AtomDate = styled.div`
  font-size: 1.125rem;
  line-height: 2;
`;

const AtomBeach = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 2;
`;

const AtomFcst = styled.div`
  font-size: 2.25rem;
  font-weight: 500;
  text-align: right;
`;

const AtomFcstTitle = styled.div`
  font-size: 0.875rem;
  text-align: right;
`;

const AtomDayWeekFcst = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
`;

const Test: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Layout>
          <TemplateLeft>
            <AtomDate>8월 6일 토요일</AtomDate>
            <AtomBeach>해운대</AtomBeach>
            <ComponentBox>
              <div style={{ width: '60px', height: '80px' }}>맑음</div>
              <div>
                <AtomFcstTitle>기온</AtomFcstTitle>
                <AtomFcst>32℃</AtomFcst>
              </div>
            </ComponentBox>
          </TemplateLeft>
          <TemplateRight>
            <div>Contnt 04</div>
            <div>Contnt 05</div>
          </TemplateRight>
        </Layout>
        <Layout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores ducimus veniam repellat ad
          ratione deleniti ex architecto a quo, mollitia sequi, alias iure quibusdam accusantium dolores maxime animi
          pariatur.
        </Layout>
      </Wrap>
    </ThemeProvider>
  );
};

export default Test;

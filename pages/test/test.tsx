import type { NextPage } from 'next';
import { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Weather from '../../components/Molecules/Weather';
import InfoOther from '../../components/Molecules/InfoOther';

const Wrap = styled.div`
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
  padding: 80px 0;
  color: ${({ theme }) => theme.color.coral};
  font-size: 16px;

  @media ${({ theme }) => theme.device.pc} {
    width: 100%;
    background-color: coral;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    background-color: ${({ theme }) => theme.color.deepCoral};
    flex-direction: column;
    font-size: 15px;
  }

  @media ${({ theme }) => theme.device.mobile13P} {
    width: 100%;
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
    padding: 24px 16px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media ${({ theme }) => theme.device.mobile13P} {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media ${({ theme }) => theme.device.mobileSE} {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const TemplateRight = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap-reverse;
`;

const ComponentBox = styled.div`
  width: 14.5em;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
`;

const AtomDate = styled.div`
  font-size: 1.125em;
  line-height: 2;
`;

const AtomBeach = styled.div`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 2;
`;

const Test: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Layout>
          <TemplateLeft>
            <div>
              <AtomDate>8월 6일 토요일</AtomDate>
              <AtomBeach>해운대</AtomBeach>
              <ComponentBox>
                <Weather />
              </ComponentBox>
            </div>
          </TemplateLeft>
          <TemplateRight>
            <ComponentBox>
              <InfoOther />
            </ComponentBox>
            <ComponentBox>
              <InfoOther />
            </ComponentBox>
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

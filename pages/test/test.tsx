import moment from 'moment';
import type { NextPage } from 'next';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Weather from '../../components/Organisms/Weather';
import InfoOther, { otherInfo } from '../../components/Organisms/InfoOther';
import CompFcstTimely from '../../components/Components/CompFcstTimely';
import CompFcstWeekly from '../../components/Components/CompFcstDaily';
import LayoutLeft from '../../components/Layouts/LayoutLeft';
import LayoutRight from '../../components/Layouts/LayoutRight';
import async from '../api/ocean';
import { useGetUltraForecast } from '$queries/useGetUltraForecast';

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

const TemplateLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const TemplateRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  @media ${({ theme }) => theme.device.mobileSE} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const TemplateCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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

async function data(beach: string) {
  const { data: Temperatures } = await useGetUltraForecast(304, {
    onSuccess: data => {
      console.log(data);
    },
  });
}

const Test: NextPage = () => {
  let month = moment().format('MM');
  month = month.replace(/(^0+)/, '');

  let day = moment().format('DD');
  day = day.replace(/(^0+)/, '');

  const dataWater: otherInfo = {
    icon: 'icon',
    title: '수온',
    content: '24℃',
  };
  const dataWave: otherInfo = {
    icon: 'icon',
    title: '파도높이',
    content: '0.5m/s',
  };
  const dataUv: otherInfo = {
    icon: 'icon',
    title: '자외선지수',
    content: '위험 11',
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <LayoutLeft>
          <TemplateLeft>
            <div>
              <AtomDate>
                {month}월 {day}일 토요일
              </AtomDate>
              <AtomBeach>해운대</AtomBeach>
              <Weather />
            </div>
          </TemplateLeft>
          <TemplateRight>
            <InfoOther info={dataWater} />
            <InfoOther info={dataWave} />
          </TemplateRight>
        </LayoutLeft>
        <LayoutRight>
          <TemplateLeft>
            <CompFcstTimely fcstTitle="하루날씨" />
            <CompFcstWeekly fcstTitle="주간날씨" />
          </TemplateLeft>
          <TemplateCenter>
            <InfoOther info={dataUv} />
            <InfoOther info={dataUv} />
          </TemplateCenter>
          <TemplateCenter>
            <InfoOther info={dataUv} />
            <InfoOther info={dataUv} />
          </TemplateCenter>
        </LayoutRight>
      </Wrap>
    </ThemeProvider>
  );
};

export default Test;

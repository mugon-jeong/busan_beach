import moment from 'moment';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import InfoOther, { otherInfo } from '$components/Organisms/InfoOther';
import CompNow from '$components/Components/CompNow';
import CompFcstTimely from '$components/Components/CompFcstTimely';
import CompFcstWeekly from '$components/Components/CompFcstDaily';
import LayoutWrap from '$components/Layouts/LayoutWrap';
import LayoutLeft from '$components/Layouts/LayoutLeft';
import LayoutRight from '$components/Layouts/LayoutRight';
import { UseGetUltraForecast } from '$queries/useGetUltraForecast';

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
  @media (max-width: ${props => props.theme.deviceSizes.mobileSE}) {
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

function Template(beach: string) {
  return UseGetUltraForecast(304);
}

const Weather: NextPage = () => {
  let month = moment().format('MM');
  month = month.replace(/(^0+)/, '');

  let day = moment().format('DD');
  day = day.replace(/(^0+)/, '');

  let Day = moment().day().toString();
  if (Day == '0') {
    Day = '일';
  } else if (Day == '1') {
    Day = '월';
  } else if (Day == '2') {
    Day = '화';
  } else if (Day == '3') {
    Day = '수';
  } else if (Day == '4') {
    Day = '목';
  } else if (Day == '5') {
    Day = '금';
  } else if (Day == '6') {
    Day = '토';
  }

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
  const dataWind: otherInfo = {
    icon: 'icon',
    title: '남동풍',
    content: '2m/s',
  };
  const dataAir: otherInfo = {
    icon: 'icon',
    title: '미세먼지',
    content: '좋음 2',
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrap>
        <LayoutLeft>
          <TemplateLeft>
            <CompNow
              Template={Template('A').data?.response.body.items.item[24].fcstValue}
              month={month}
              day={day}
              Day={Day}
            />
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
          <div>
            <TemplateCenter>
              <InfoOther info={dataUv} />
              <InfoOther info={dataWater} />
            </TemplateCenter>
            <TemplateCenter>
              <InfoOther info={dataAir} />
              <InfoOther info={dataWind} />
            </TemplateCenter>
          </div>
        </LayoutRight>
      </LayoutWrap>
    </ThemeProvider>
  );
};

export default Weather;

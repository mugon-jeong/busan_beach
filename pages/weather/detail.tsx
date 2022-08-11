import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import OFcstWater from '$components/Organisms/OFcstWater';
import OFcstUv from '$components/Organisms/OFcstUv';
import OFcstAir from '$components/Organisms/OFcstAir';
import OFcstWind from '$components/Organisms/OFcstWind';
import TmplFcst from '$components/Templates/TmplFcst';
import TmplWater from '$components/Templates/TmplWater';
import TmplFcstTimely from '$components/Templates/TmplFcstTimely';
import TmplFcstDaily from '$components/Templates/TmplFcstDaily';
import LayoutWrap from '$components/Layouts/LayoutWrap';
import LayoutLeft from '$components/Layouts/LayoutLeft';
import LayoutRight from '$components/Layouts/LayoutRight';

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

// function Template(beach: string) {
//   return UseGetUltraForecast(304);
// }

const Detail: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrap>
        <LayoutLeft>
          <TmplFcst />
          <TmplWater />
        </LayoutLeft>
        <LayoutRight>
          <TmplFcstTimely />
          <TmplFcstDaily />
          <div>
            <TemplateCenter>
              <OFcstUv />
              <OFcstWater />
            </TemplateCenter>
            <TemplateCenter>
              <OFcstAir />
              <OFcstWind />
            </TemplateCenter>
          </div>
        </LayoutRight>
      </LayoutWrap>
    </ThemeProvider>
  );
};

export default Detail;

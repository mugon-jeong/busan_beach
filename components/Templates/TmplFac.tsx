import React from 'react';
import styled from '@emotion/styled';
import OFac from '$components/Organisms/OFac';

const TemplateCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1.2em;
`;

const WrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLine = styled.div`
  width: 54%;
  height: 1px;
  background-color: #fff;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 74%;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 50%;
  }
`;

const TitleSection = styled.div`
  width: 10em;
  box-sizing: border-box;
  position: relative;
  font-size: 1.6em;
  font-weight: 700;
  padding: 1.2em 0;
  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    width: 13em;
  }
  @media (max-width: ${props => props.theme.deviceSizes.mobile13P}) {
    width: 12em;
  }
`;

const TmplFac = ({
  swim,
  parking,
  booth,
  shower,
  lifejacket,
  parasole,
  sunbed,
  tube,
}: {
  swim: string;
  parking: string;
  booth: string;
  shower: string;
  lifejacket: string;
  parasole: string;
  sunbed: string;
  tube: string;
}) => {
  return (
    <TemplateCenter>
      <WrapTitle>
        <TitleSection>해수욕장 시설정보</TitleSection>
        <TitleLine />
      </WrapTitle>
      <>
        <OFac iconKey={'SWIM'} title={'입수시간'} content={swim} />
        <OFac iconKey={'PARKING'} title={'주차장'} content={parking} />
        <OFac iconKey={'SHOWER'} title={'샤워시설'} content={shower} />
        <OFac iconKey={'BOOTH'} title={'탈의실'} content={booth} />
        <OFac iconKey={'LIFEJACKET'} title={'구명조끼'} content={lifejacket} />
        <OFac iconKey={'PARASOLE'} title={'파라솔'} content={parasole} />
        <OFac iconKey={'SUNBED'} title={'선베드'} content={sunbed} />
        <OFac iconKey={'TUBE'} title={'튜브'} content={tube} />
      </>
    </TemplateCenter>
  );
};

export default TmplFac;

import React from 'react';
import styled from '@emotion/styled';
import OFacParking from '$components/Organisms/OFacParking';
import OFacBooth from '$components/Organisms/OFacBooth';
import OFacShower from '$components/Organisms/OFacShower';
import OFacSwim from '$components/Organisms/OFacSwim';
import OFacLifejacket from '$components/Organisms/OFacLifejacket';
import OFacParasole from '$components/Organisms/OFacParasole';
import OFacSunbed from '$components/Organisms/OFacSunbed';
import OFacTube from '$components/Organisms/OFacTube';

const TemplateCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TitleSection = styled.div`
  width: 100%;
  padding: 0.6em;
  box-sizing: border-box;
  position: relative;
  ::before {
    width: 56%;
    height: 1px;
    content: '';
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
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
      <TitleSection>
        <h2>해수욕장 시설정보</h2>
      </TitleSection>
      <>
        <OFacSwim swim={swim} />
        <OFacParking parking={parking} />
        <OFacBooth booth={booth} />
        <OFacShower shower={shower} />
        <OFacLifejacket lifejacket={lifejacket} />
        <OFacParasole parasole={parasole} />
        <OFacSunbed sunbed={sunbed} />
        <OFacTube tube={tube} />
      </>
    </TemplateCenter>
  );
};

export default TmplFac;

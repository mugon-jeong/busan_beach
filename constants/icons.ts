export type IconKey =
  | 'CLEAN'
  | 'CLOUD'
  | 'BLUR'
  | 'RAIN'
  | 'RAINSNOW'
  | 'SNOW'
  | 'SMALLRAIN'
  | 'WATER'
  | 'WAVE'
  | 'WIND'
  | 'UV'
  | 'DUST'
  | 'FINEDUST'
  | 'BACK'
  | 'PARKING'
  | 'LIFEJACKET'
  | 'PARASOLE'
  | 'SUNBED'
  | 'BOOTH'
  | 'SHOWER'
  | 'SWIM'
  | 'TUBE'
  | 'PLUS';
export const IconURL: {
  [key in IconKey]: {
    url: string;
    alt: string;
  };
} = {
  CLEAN: {
    url: '/asset/icon/sun-solid.svg',
    alt: '맑음',
  },
  CLOUD: {
    url: '/asset/icon/cloud-sun-solid.svg',
    alt: '구름많음',
  },
  BLUR: {
    url: '/asset/icon/cloud-solid.svg',
    alt: '흐림',
  },
  RAIN: {
    url: '/asset/icon/cloud-showers-heavy-solid.svg',
    alt: '비',
  },
  RAINSNOW: {
    url: '/asset/icon/cloud-rain-snow.svg',
    alt: '비나눈',
  },
  SNOW: {
    url: '/asset/icon/snowflake-solid.svg',
    alt: '눈',
  },
  SMALLRAIN: {
    url: '/asset/icon/cloud-showers-heavy-solid.svg',
    alt: '소나기',
  },
  WATER: {
    url: '/asset/icon/temperature-half-solid.svg',
    alt: '수온',
  },
  WAVE: {
    url: '/asset/icon/wave-solid.svg',
    alt: '파도높이',
  },
  WIND: {
    url: '/asset/icon/wind-solid.svg',
    alt: '바람',
  },
  UV: {
    url: '/asset/icon/sun-uv.svg',
    alt: '자외선',
  },
  DUST: {
    url: '/asset/icon/air-dust.svg',
    alt: '미세먼지',
  },
  FINEDUST: {
    url: '/asset/icon/air-dust.svg',
    alt: '초미세먼지',
  },
  BACK: {
    url: '/asset/icon/back.svg',
    alt: '뒤로가기',
  },
  PARKING: {
    url: '/asset/icon/facility_parking.svg',
    alt: '주차장',
  },
  LIFEJACKET: {
    url: '/asset/icon/facility_lifejacket.svg',
    alt: '구명조끼',
  },
  PARASOLE: {
    url: '/asset/icon/facility_parasole.svg',
    alt: '파라솔',
  },
  SUNBED: {
    url: '/asset/icon/facility_sunbed.svg',
    alt: '선베드',
  },
  BOOTH: {
    url: '/asset/icon/facility_booth.svg',
    alt: '탈의실',
  },
  SHOWER: {
    url: '/asset/icon/facility_shower.svg',
    alt: '샤워실',
  },
  SWIM: {
    url: '/asset/icon/facility_swimming.svg',
    alt: '이용가능시간',
  },
  TUBE: {
    url: '/asset/icon/facility_tube.svg',
    alt: '이용가능시간',
  },
  PLUS: {
    url: '/asset/icon/plus.svg',
    alt: '바로가기',
  },
};

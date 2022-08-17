export type IconKey = '일광' | '광안리' | '해운대' | '임랑' | '송도' | '다대포' | '송정';
export const IconURL: {
  [key in string]: {
    url: string;
    alt: string;
    content: string;
    link: string;
  };
} = {
  해운대1: {
    url: '/asset/content/Haeundae_Hot_Spring.png',
    alt: '해운대 온천 사진',
    content: '해운대 온천',
    link: 'http://www.haeundaespa.com/',
  },
  해운대2: {
    url: '/asset/content/Haeundae_Blue_Rain_Park.png',
    alt: '블루레인파크 사진',
    content: '블루레인파크',
    link: 'https://www.bluelinepark.com/',
  },
  해운대3: {
    url: '/asset/content/Haeundae_Dongbaekseom_Island.png',
    alt: '동백섬 사진',
    content: '동백섬',
    link: 'https://me2.do/555w6N0X',
  },

  해운대4: {
    url: '/asset/content/Haeundae-Dalmaji-gil.png',
    alt: '달맞이길 사진',
    content: '달맞이길',
    link: 'https://me2.do/GRvGvusT',
  },

  임랑1: {
    url: '/asset/content/Imrang_ParkTaeJun.png',
    alt: '박태준 기념관 사진',
    content: '박태준 기념관',
    link: 'https://me2.do/F2wAOKI5',
  },
  임랑2: {
    url: '/asset/content/Imrang_FishLight.png',
    alt: '임랑항방파제등대 사진',
    content: '임랑항방파제등대',
    link: 'https://blog.naver.com/portbusan2/222249328690',
  },
  임랑3: {
    url: '/asset/content/Imrang_Galmaetgil.png',
    alt: '갈맷길 1-1코스 사진',
    content: '갈맷길 1-1',
    link: 'https://www.busan.go.kr/galmaetgil/tour0101',
  },
  임랑4: {
    url: '/asset/content/Imrang_Waveon.png',
    alt: '웨이브온 커피 사진',
    content: '웨이브온 커피',
    link: 'https://waveoncoffee.com/',
  },

  송도1: {
    url: '/asset/content/Songdo-Gamcheon_Culture_Village.png',
    alt: '감천문화마을 사진',
    content: '감천문화마을',
    link: 'https://www.gamcheon.or.kr/',
  },
  송도2: {
    url: '/asset/content/Songdo-Amnam_Park.png',
    alt: '암남공원 사진',
    content: '암남공원',
    link: ' https://www.bsseogu.go.kr/tour/board/view.do?boardId=BBS_0000081&menuCd=DOM_000000304003000000&dataSid=5011',
  },
  송도3: {
    url: '/asset/content/Songdo-Marine_Cable_Car.png',
    alt: '해상 케이블 카 사진',
    content: '해상 케이블 카',
    link: 'http://busanaircruise.co.kr/main/main.html',
  },
  송도4: {
    url: '/asset/content/Songdo-Temporary_Capital_Memorial_Hall.png',
    alt: '임시수도기념관 사진',
    content: '임시수도기념관',
    link: 'https://museum.busan.go.kr/monument/index',
  },

  다대포1: {
    url: '/asset/content/Dadaepo-Dream_Sunset_Fountain.png',
    alt: '낙조분수 사진',
    content: '낙조분수',
    link: 'https://www.saha.go.kr/tour/contents.do?mId=0101020000',
  },
  다대포2: {
    url: '/asset/content/Dadaepo-Molundae.png',
    alt: '몰운대 사진',
    content: '몰운대',
    link: 'https://me2.do/xwDNguYq',
  },
  다대포3: {
    url: '/asset/content/Dadaepo-Amisan_Observatory.png',
    alt: '아미산 전망대 사진',
    content: '아미산 전망대',
    link: 'https://www.busan.go.kr/wetland/amisan',
  },
  다대포4: {
    url: '/asset/content/Dadaepo-Eulsukdo.png',
    alt: '을숙도 사진',
    content: '을숙도',
    link: 'https://www.busan.go.kr/nakdong/eulsukdo',
  },

  송정1: {
    url: '/asset/content/Songjeong_Blue_Rain_Park.png',
    alt: '블루레인파크 사진',
    content: '블루레인파크',
    link: 'https://www.bluelinepark.com/',
  },
  송정2: {
    url: '/asset/content/Songjeong-Cheongsapo.png',
    alt: '청사포 사진',
    content: '청사포',
    link: 'https://me2.do/Fx5A2EIz',
  },
  송정3: {
    url: '/asset/content/Songjeong-Jukdo_Park.png',
    alt: '죽도공원 사진',
    content: '죽도공원',
    link: 'https://me2.do/x6ZrIOWH',
  },
  송정4: {
    url: '/asset/content/Songjeong-Yonggungsa.png',
    alt: '용궁사 사진',
    content: '용궁사',
    link: 'http://yongkungsa.or.kr/',
  },

  광안리1: {
    url: '/asset/content/Gwangalli-Milrak_Waterfront_Park.png',
    alt: '민락수변공원사진',
    content: '민락수변공원',
    link: 'https://me2.do/FcUa5uEH',
  },
  광안리2: {
    url: '/asset/content/Gwangalli-Dron_Show.png',
    alt: '드론라이트쇼 사진',
    content: '드론라이트쇼',
    link: 'https://me2.do/x3bnUpKP',
  },
  광안리3: {
    url: '/asset/content/Gwangalli-UN_Memorial_Park.png',
    alt: '유엔기념공원 사진',
    content: '유엔기념공원',
    link: 'https://www.unmck.or.kr/intro/',
  },
  광안리4: {
    url: '/asset/content/Gwangalli-F1963.png',
    alt: 'F1963 사진',
    content: 'F1963',
    link: 'http://www.f1963.org/ko/',
  },

  일광1: {
    url: '/asset/content/Ilgwang,_Imrang-Daleumsan_Natural_Recreation_Forest.png',
    alt: '달음산자연휴양림 사진',
    content: '달음산 자연휴양림',
    link: 'https://www.foresttrip.go.kr/indvz/main.do?hmpgId=0202',
  },
  일광2: {
    url: '/asset/content/Ilgwang,_Imrang-Jukseong_Catholic_Church.png',
    alt: '죽성성당 사진',
    content: '죽성성당',
    link: 'https://me2.do/5VebsSzL',
  },
  일광3: {
    url: '/asset/content/Ilgwang,_Imrang-Osiria_Tourist_Complex.png',
    alt: '오시리아 관광단지 사진',
    content: '오시리아 관광단지',
    link: 'https://osiria.bmc.busan.kr/osiria/main.do',
  },
  일광4: {
    url: '/asset/content/Ilgwang,_Imrang-Andersen_Fairy_Tale_Village.png',
    alt: '안데르센 동화마을 사진',
    content: '안데르센 동화마을',
    link: 'https://me2.do/FCH3y24a',
  },
};

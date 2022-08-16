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
    alt: '',
    content: '해운대 온천',
    link: 'http://www.haeundaespa.com/',
  },
  해운대2: {
    url: '/asset/content/Haeundae_Blue_Rain_Park.png',
    alt: '',
    content: '블루레인파크',
    link: 'https://www.bluelinepark.com/',
  },
  해운대3: { url: '/asset/content/Haeundae_Dongbaekseom_Island.png', alt: '', content: '동백섬', link: '' },
  해운대4: { url: '/asset/content/Haeundae-Dalmaji-gil.png', alt: '', content: '달맞이길', link: '' },

  임랑1: {
    url: '/asset/content/Ilgwang,_Imrang-Daleumsan_Natural_Recreation_Forest.png',
    alt: '',
    content: '달음산 자연휴양림',
    link: 'https://www.foresttrip.go.kr/indvz/main.do?hmpgId=0202',
  },
  임랑2: { url: '/asset/content/Ilgwang,_Imrang-Jukseong_Catholic_Church.png', alt: '', content: '죽성성당', link: '' },
  임랑3: {
    url: '/asset/content/Ilgwang,_Imrang-Osiria_Tourist_Complex.png',
    alt: '',
    content: '오시리아 관광단지',
    link: '',
  },
  임랑4: {
    url: '/asset/content/Ilgwang,_Imrang-Andersen_Fairy_Tale_Village.png',
    alt: '',
    content: '안데르센 동화마을',
    link: '',
  },

  송도1: {
    url: '/asset/content/Songdo-Gamcheon_Culture_Village.png',
    alt: '',
    content: '감천문화마을',
    link: 'https://www.gamcheon.or.kr/',
  },
  송도2: {
    url: '/asset/content/Songdo-Amnam_Park.png',
    alt: '',
    content: '암남공원',
    link: ' https://www.bsseogu.go.kr/tour/board/view.do?boardId=BBS_0000081&menuCd=DOM_000000304003000000&dataSid=5011',
  },
  송도3: {
    url: '/asset/content/Songdo-Marine_Cable_Car.png',
    alt: '',
    content: '해상 케이블 카',
    link: 'http://busanaircruise.co.kr/main/main.html',
  },
  송도4: {
    url: '/asset/content/Songdo-Temporary_Capital_Memorial_Hall.png',
    alt: '',
    content: '임시수도기념관',
    link: 'https://museum.busan.go.kr/monument/index',
  },

  다대포1: {
    url: '/asset/content/Dadaepo-Dream_Sunset_Fountain.png',
    alt: '',
    content: '낙조분수',
    link: 'https://www.saha.go.kr/tour/contents.do?mId=0101020000',
  },
  다대포2: { url: '/asset/content/Dadaepo-Molundae.png', alt: '', content: '몰운대', link: '' },
  다대포3: {
    url: '/asset/content/Dadaepo-Amisan_Observatory.png',
    alt: '',
    content: '아미산 전망대',
    link: 'https://www.busan.go.kr/wetland/amisan',
  },
  다대포4: {
    url: '/asset/content/Dadaepo-Eulsukdo.png',
    alt: '',
    content: '을숙도',
    link: 'https://www.busan.go.kr/nakdong/eulsukdo',
  },

  송정1: {
    url: '/asset/content/Songjeong_Blue_Rain_Park.png',
    alt: '',
    content: '블루레인파크',
    link: 'https://www.bluelinepark.com/',
  },
  송정2: { url: '/asset/content/Songjeong-Cheongsapo.png', alt: '', content: '청사포', link: '' },
  송정3: { url: '/asset/content/Songjeong-Jukdo_Park.png', alt: '', content: '죽도공원', link: '' },
  송정4: {
    url: '/asset/content/Songjeong-Yonggungsa.png',
    alt: '',
    content: '용궁사',
    link: 'http://yongkungsa.or.kr/',
  },

  광안리1: { url: '/asset/content/Gwangalli-Milrak_Waterfront_Park.png', alt: '', content: '민락수변공원', link: '' },
  광안리2: { url: '/asset/content/Gwangalli-Bangcheon-dong.png', alt: '', content: '빵천동', link: '' },
  광안리3: {
    url: '/asset/content/Gwangalli-UN_Memorial_Park.png',
    alt: '',
    content: '유엔기념공원',
    link: 'https://www.unmck.or.kr/intro/',
  },
  광안리4: { url: '/asset/content/Gwangalli-F1963.png', alt: '', content: 'F1963', link: 'http://www.f1963.org/ko/' },

  일광1: {
    url: '/asset/content/Ilgwang,_Imrang-Daleumsan_Natural_Recreation_Forest.png',
    alt: '',
    content: '달음산 자연휴양림',
    link: 'https://www.foresttrip.go.kr/indvz/main.do?hmpgId=0202',
  },
  일광2: { url: '/asset/content/Ilgwang,_Imrang-Jukseong_Catholic_Church.png', alt: '', content: '죽성성당', link: '' },
  일광3: {
    url: '/asset/content/Ilgwang,_Imrang-Osiria_Tourist_Complex.png',
    alt: '',
    content: '오시리아 관광단지',
    link: '',
  },
  일광4: {
    url: '/asset/content/Ilgwang,_Imrang-Andersen_Fairy_Tale_Village.png',
    alt: '',
    content: '안데르센 동화마을',
    link: '',
  },
};

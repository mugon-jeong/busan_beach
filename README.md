# [부산 해수욕장 날씨 프로젝트](https://busanbeachweather.com)

## 기획 및 개발

- 팀 : 물반사람반
    - 기획 : 손해원
    - 개발 : 정무곤, 김보라, 장주영
    - 디자인 : 김보라

## 기획의도

> 이 프로젝트는 부산의 해수욕장을 방문하는 사람들에게 간단한 위치 정보와 날씨 정보를 제공하는 서비스이다. 많은 사람이 해수욕장의 위치와 날씨만 검색하고 방문한다. 하지만 예상외로 차가운 해수온이나 높은 파도 때문에 물놀이를 즐기지 못하는 경우도 있다. 이런 경험을 바탕으로 해수욕장을 방문하는 사람들에게 필요한 몇 가지 세부 정보를 추가로 제공하고, 사용하기 편한 UI를 제공하여 적절한 해수욕장을 찾을 수 있는 서비스를 만들었다.

## 주요기능

### 사용자 경험(UX)을 중요하게 생각하는 UI

- [`Suspense`](https://reactjs.org/docs/react-api.html#suspense)와 [`Error Boundary`](https://reactjs.org/docs/error-boundaries.html#gatsby-focus-wrapper)를 활용한  런타임 데이터 로딩 및 에러 처리
- [`react-query`](https://www.npmjs.com/package/react-query)로 구현된 캐싱을 통한 데이터 로딩 시간 및 모바일 사용량 최적화

### 직관적인 UI/UX

- 부산의 7대 해수욕장(해운대, 광안리, 다대포, 송도, 송정, 일광, 임랑)의 상세 정보를 한 곳에서 선택하여 볼 수 있음
- 아이콘와 텍스트를 활용하여 사용자가 직관적으로 사용할 수 있도록 UI/UX 구현

### 다양한 정보 제공

- 실시간 제공
    - 기온, 수온, 파고, 풍향, 풍속, 자외선지수, 미세먼지, 초미세먼지
- 하루 예보
    - 매 시간 기온, 강수확률
- 주간예보
    - 해당일 최저/최고 기온, 강수확률

### 마케팅 도구 포함

- 구글 애널리틱스, 구글 서치콘솔, 네이버 웹마스터 도구를 곧바로 사용할 수 있음

## 프로젝트 실행과 개발

### .env 파일 작성

```
API_URL_BASE=https://apis.data.go.kr
BEACH_WEATHER_KEY=기상청_전국 해수욕장 날씨 조회서비스
OCEAN_DATA_KEY=해양수산부 국립해양조사원_해수욕장정보
LIVING_WEATHER_KEY=기상청_생활기상지수 조회서비스(3.0)
MEDIUM_FORECAST_KEY=기상청_중기예보 조회서비스
SHORT_FORECAST_KEY=기상청_단기예보 ((구)_동네예보) 조회서비스
AIR_QUALITY_KEY=부산광역시_대기질 정보 조회
GA_TRACKING_ID=구글 애널리틱스
```

### 로컬에서 개발 환경 구성

```shell
$ npm install
$ npm run dev
```

### 도커를 활용한 실행 환경

```shell
$ docker compose up
```
### 기타 사항
- nginx - port 80, upstream 3000
- pm2 - cluster mode

## 프로젝트에 활용한 OPEN API 목록

* [기상청_전국 해수욕장 날씨 조회서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15102239)
* [기상청_생활기상지수 조회서비스(3.0)](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15085288)
* [부산광역시_대기질 정보 조회](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057173)
* [기상청_단기예보 ((구)_동네예보) 조회서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084)
* [기상청_중기예보 조회서비스](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15059468)
* [해양수산부 국립해양조사원_해수욕장정보](http://www.khoa.go.kr/oceangrid/khoa/takepart/openapi/openApiBeachInfo.do)

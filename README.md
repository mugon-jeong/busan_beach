# 프로젝트

> 부산 해수욕장 날씨

## 제작

> 팀 : 물반사람반
> - 기획 : 손해원
> - 개발 : 정무곤, 김보라, 장주영
> - 디자인 : 깁보라

# 기획의도

이 프로젝트는 부산 해수욕장을 방문하는 이들에게 도움이 되는 정보를 제공하는 사이트이다.
해수욕장에 가기 위해서 검색을 하면, 간단한 위치 정보와 날씨 정보가 제공된다.
날씨만 보고 해수욕장을 방문했지만, 예상 외로 차가운 수온, 높은 파도 등에 제대로 즐기지 못한 체 돌아가야 했던 경험과 현재 정보를 제공해주는 사이트들의 UI에 아쉬움을 느껴 이를 보완하고자 제작하게 되었다

# 주요기능

## 사용자경험

- suspense + errorboundary를 통해 로딩중과 에러처리
- react-query로 캐싱 구현

## 메인화면

부산의 7대 해수욕장(해운대, 광안리, 다대포, 송도, 송정, 일광, 임랑)의 상세 정보를 선택하여 볼 수 있게 하는 아이콘이 있습니다.

## 상세화면

1. 실시간 제공

- 기온, 수온, 파고, 풍향, 풍속, 자외선지수, 미세먼지, 초미세먼지

2. 하루예보

- 매 시간 기온, 강수확률

3. 주간예보

- 해당일 최저/최고 기온, 강수확률

## 마케팅

- 구글 애널리틱스
- 구글 서치콘솔
- 네이버 웹마스터 도구

# build

```shell
docker compose up
```

# run dev

```shell
npm run dev
```

## build 구성

- nginx - port 80, upstream 3000
- pm2 - cluster

## 사용한 OPEN API

### 기상청_전국 해수욕장 날씨 조회서비스

- https://www.data.go.kr/iim/api/selectAPIAcountView.do

### 기상청_생활기상지수 조회서비스(3.0)

- https://www.data.go.kr/iim/api/selectAPIAcountView.do

### 부산광역시_대기질 정보 조회

- https://www.data.go.kr/iim/api/selectAPIAcountView.do

### 기상청_단기예보 ((구)_동네예보) 조회서비스

- https://www.data.go.kr/iim/api/selectAPIAcountView.do

### 기상청_중기예보 조회서비스

- https://www.data.go.kr/iim/api/selectAPIAcountView.do

### 해양수산부 국립해양조사원_해수욕장정보

- https://www.data.go.kr/data/15099707/openapi.do

# env 구성

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
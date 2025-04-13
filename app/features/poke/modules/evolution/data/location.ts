const icyRockLocations = [
  {
    region: '신오',
    location: '217번도로',
  },
  {
    region: '하나',
    location: '태엽산 지하 1층',
  },
  {
    region: '칼로스',
    location: '프로스트케이브',
  },
  {
    region: '호연',
    location: '여울의 동굴 (썰물일 때) (OR/AS)',
  },
  {
    region: '알로라',
    location: '라나키라마운틴',
  },
  {
    region: '히스이',
    location: '순백 동토 극한의 황무지',
  },
];

const magneticFiledLocations = [
  {
    region: '신오',
    location: '천관산',
  },
  {
    region: '하나',
    location: '전기돌동굴',
  },
  {
    region: '칼로스',
    location: '13번 도로 (칼로스발전소 인근)',
  },
  {
    region: '호연',
    location: '뉴보라 (OR/AS)',
  },
  {
    region: '알로라',
    location: '포니대협곡, 화끈산 지열발전소 (USUM)',
  },
  {
    region: '히스이',
    location: '천관산 기슭',
  },
];

const mossyRockLocations = [
  {
    region: '신오',
    location: '영원의 숲',
  },
  {
    region: '하나',
    location: '바람개비숲',
  },
  {
    region: '칼로스',
    location: '20번 도로 (미혹의 숲)',
  },
  {
    region: '호연',
    location: '등화숲 (OR/AS)',
  },
  {
    region: '알로라',
    location: '셰이드정글',
  },
  {
    region: '히스이',
    location: '흑요 들판 안쪽 숲',
  },
];

export type EvolutionLocationKey =
  | 'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

export const EVOLUTION_LOCATION: EvolutionLocationKey[] = [
  'mossyRock',
  'icyRock',
  'magneticField',
  'mountLanakila',
];

export const EVOLUTION_LOCATION_KO: Record<EvolutionLocationKey, string> = {
  mossyRock: '이끼 낀 바위 근처',
  icyRock: '얼음 바위 근처',
  magneticField: '자기장 영역',
  mountLanakila: '라나키라마운틴',
};

export const EVOLUTION_REGION_LOCATION_KO: Partial<
  Record<EvolutionLocationKey, { region: string; location: string }[]>
> = {
  mossyRock: mossyRockLocations,
  icyRock: icyRockLocations,
  magneticField: magneticFiledLocations,
};

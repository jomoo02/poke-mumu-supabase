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

export const evolutionAreas = [
  'mossy-rock',
  'icy-rock',
  'magnetic-field',
  'mount-lanakila',
] as const;

export type EvolutionAreaKey = (typeof evolutionAreas)[number];

export const evolutionAreasKo: Record<EvolutionAreaKey, string> = {
  'mossy-rock': '이끼 낀 바위 근처',
  'icy-rock': '얼음 바위 근처',
  'magnetic-field': '자기장 영역',
  'mount-lanakila': '라나키라마운틴',
};

export const evolutionRegionLocationsKo: Record<
  EvolutionAreaKey,
  {
    title: string;
    id: string;
    locations: { region: string; location: string }[];
  }
> = {
  'mossy-rock': {
    id: 'mossyRock',
    title: evolutionAreasKo['mossy-rock'],
    locations: mossyRockLocations,
  },
  'icy-rock': {
    id: 'icyRock',
    title: evolutionAreasKo['icy-rock'],
    locations: icyRockLocations,
  },
  'magnetic-field': {
    id: 'magneticField',
    title: evolutionAreasKo['magnetic-field'],
    locations: magneticFiledLocations,
  },
  'mount-lanakila': {
    id: 'mountLanakila',
    title: evolutionAreasKo['mount-lanakila'],
    locations: magneticFiledLocations.filter(
      ({ region }) => region === 'Alola' || region === '알로라',
    ),
  },
};

import { createMapGetter } from '@/app/utils/create-map-getter';

const pokedexLabelListKoMap: Record<string, string> = {
  national: '전국도감',
  kanto: '레드/블루/피카츄',
  'original-johto': '골드/실버/크리스탈',
  hoenn: '루비/사파이어/에메랄드',
  'updated-kanto': '파이어레드/리프그린',
  'original-sinnoh': '디아루가/펄',
  'extended-sinnoh': '기라티나',
  'updated-johto': '하트골드/소울실버',
  'original-unova': '블랙/화이트',
  'updated-unova': '블랙2/화이트2',
  'kalos-central': 'X/Y - 센트럴칼로스',
  'kalos-coastal': 'X/Y - 코스트칼로스',
  'kalos-mountain': 'X/Y - 마운틴칼로스',
  'updated-hoenn': '오메가루비/알파사파이어',
  'original-alola': '썬/문',

  'original-melemele': '썬/문 - 멜레멜레',
  'original-akala': '썬/문 - 아칼라',
  'original-ulaula': '썬/문 - 울라울라',
  'original-poni': '썬/문 - 포니',

  'updated-alola': '울트라썬/울트라문',
  'updated-melemele': '울트라썬/울트라문 - 멜레멜레',
  'updated-akala': '울트라썬/울트라문 - 아칼라',
  'updated-ulaula': '울트라썬/울트라문 - 울라울라',
  'updated-poni': '울트라썬/울트라문 - 포니',

  'letsgo-kanto': '레츠고피카츄/레츠고이브이',
  galar: '소드/실드 - 가라르',
  'isle-of-armor': '소드/실드 - 갑옷섬',
  'crown-tundra': '소드/실드 - 왕관의 설원',
  hisui: '레전드아르세우스',
  paldea: '스칼렛/바이올렛 - 팔데아',
  kitakami: '스칼렛/바이올렛 - 북신',
  blueberry: '스칼렛/바이올렛 - 블루베리',
} as const;

export const getPokedexLabelKo = createMapGetter(
  pokedexLabelListKoMap,
  'national',
);

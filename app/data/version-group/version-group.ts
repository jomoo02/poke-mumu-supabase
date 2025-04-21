export type VersionGroup =
  | 'red-blue'
  | 'yellow'
  | 'gold-silver'
  | 'crystal'
  | 'ruby-sapphire'
  | 'emerald'
  | 'firered-leafgreen'
  | 'diamond-pearl'
  | 'platinum'
  | 'heartgold-soulsilver'
  | 'black-white'
  | 'black-2-white-2'
  | 'x-y'
  | 'omega-ruby-alpha-sapphire'
  | 'sun-moon'
  | 'ultra-sun-ultra-moon'
  | 'sword-shield'
  | 'brilliant-diamond-and-shining-pearl'
  | 'lets-go-pikachu-lets-go-eevee'
  | 'scarlet-violet';

export const VERSION_GROUP_LIST_KO: Record<VersionGroup, string> = {
  'red-blue': '레드/그린',
  yellow: '피카츄',
  'gold-silver': '골드/실버',
  crystal: '크리스탈',
  'ruby-sapphire': '루비/사파이어',
  emerald: '에메랄드',
  'firered-leafgreen': '파이어레드/리프그린',
  'diamond-pearl': '디아루가/펄기아',
  platinum: '기라티나',
  'heartgold-soulsilver': '하트골드/소울실버',
  'black-white': '블랙/화이트',
  'black-2-white-2': '블랙 2/화이트 2',
  'x-y': 'X/Y',
  'omega-ruby-alpha-sapphire': '오메가루비/알파사파이어',
  'sun-moon': '썬/문',
  'ultra-sun-ultra-moon': '울트라썬/울트라문',
  'sword-shield': '소드/실드',
  'brilliant-diamond-and-shining-pearl': '브릴리언트 다이아몬드/샤이닝 펄',
  'lets-go-pikachu-lets-go-eevee': '레츠고! 피카츄/레츠고! 이브이',
  'scarlet-violet': '스칼렛/바이올렛',
};

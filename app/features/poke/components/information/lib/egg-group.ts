import { createMapGetter } from '@/app/utils/create-map-getter';

export type EggGroup =
  | 'indeterminate'
  | 'bug'
  | 'dragon'
  | 'fairy'
  | 'ground'
  | 'flying'
  | 'plant'
  | 'humanshape'
  | 'mineral'
  | 'monster'
  | 'water1'
  | 'water2'
  | 'water3'
  | 'ditto'
  | 'no-eggs';

const eggGroupKoMap: Record<EggGroup, string> = {
  indeterminate: '부정형',
  bug: '벌레',
  dragon: '드래곤',
  fairy: '요정',
  ground: '육상',
  flying: '비행',
  plant: '식물',
  humanshape: '인간형',
  mineral: '광물',
  monster: '괴수',
  ditto: '메타몽',
  water1: '수중1',
  water2: '수중2',
  water3: '수중3',
  'no-eggs': '미발견',
};

export const getEggGroupKo = createMapGetter(eggGroupKoMap, 'no-eggs');

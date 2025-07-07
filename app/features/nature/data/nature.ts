export const natures = [
  'hardy',
  'lonely',
  'adamant',
  'naughty',
  'brave',
  'bold',
  'docile',
  'impish',
  'lax',
  'relaxed',
  'modest',
  'mild',
  'bashful',
  'rash',
  'quiet',
  'calm',
  'gentle',
  'careful',
  'quirky',
  'sassy',
  'timid',
  'hasty',
  'jolly',
  'naive',
  'serious',
] as const;

export type Nature = (typeof natures)[number];

export const naturesTable = [
  ['', '- 공격', '- 방어', '- 특공', '- 특방', '- 스피드'],
  ['+ 공격', 'hardy', 'lonely', 'adamant', 'naughty', 'brave'],
  ['+ 방어', 'bold', 'docile', 'impish', 'lax', 'relaxed'],
  ['+ 특공', 'modest', 'mild', 'bashful', 'rash', 'quiet'],
  ['+ 특방', 'calm', 'gentle', 'careful', 'quirky', 'sassy'],
  ['+ 스피드', 'timid', 'hasty', 'jolly', 'naive', 'serious'],
];

export const naturesKoMap: Record<Nature, string> = {
  hardy: '노력',
  lonely: '외로움',
  adamant: '고집',
  naughty: '개구쟁이',
  brave: '용감',
  bold: '대담',
  docile: '온순',
  impish: '장난꾸러기',
  lax: '촐랑',
  relaxed: '무사태평',
  modest: '조심',
  mild: '의젓',
  bashful: '수줍음',
  rash: '덜렁',
  quiet: '냉정',
  calm: '차분',
  gentle: '얌전',
  careful: '신중',
  quirky: '변덕',
  sassy: '건방',
  timid: '겁쟁이',
  hasty: '성급',
  jolly: '명랑',
  naive: '천진난만',
  serious: '성실',
};

type Stat = '공격' | '방어' | '특수공격' | '특수방어' | '스피드';

type NatureEffect = {
  increase: Stat | null;
  decrease: Stat | null;
};

export const natureStatMap: Record<Nature, NatureEffect> = {
  hardy: { increase: null, decrease: null },
  lonely: { increase: '공격', decrease: '방어' },
  adamant: { increase: '공격', decrease: '특수공격' },
  naughty: { increase: '공격', decrease: '특수방어' },
  brave: { increase: '공격', decrease: '스피드' },

  bold: { increase: '방어', decrease: '공격' },
  docile: { increase: null, decrease: null },
  impish: { increase: '방어', decrease: '특수공격' },
  lax: { increase: '방어', decrease: '특수방어' },
  relaxed: { increase: '방어', decrease: '스피드' },

  modest: { increase: '특수공격', decrease: '공격' },
  mild: { increase: '특수공격', decrease: '방어' },
  bashful: { increase: null, decrease: null },
  rash: { increase: '특수공격', decrease: '특수방어' },
  quiet: { increase: '특수공격', decrease: '스피드' },

  calm: { increase: '특수방어', decrease: '공격' },
  gentle: { increase: '특수방어', decrease: '방어' },
  careful: { increase: '특수방어', decrease: '특수공격' },
  quirky: { increase: null, decrease: null },
  sassy: { increase: '특수방어', decrease: '스피드' },

  timid: { increase: '스피드', decrease: '공격' },
  hasty: { increase: '스피드', decrease: '방어' },
  jolly: { increase: '스피드', decrease: '특수공격' },
  naive: { increase: '스피드', decrease: '특수방어' },
  serious: { increase: null, decrease: null },
};

export type NatureTableV2 = {
  nature: Nature;
  ko: string;
  en: string;
  increase: Stat | null;
  decrease: Stat | null;
};

export const naturesTableV2: NatureTableV2[] = [
  {
    nature: 'lonely',
    ko: naturesKoMap.lonely,
    en: 'lonely',
    increase: '공격',
    decrease: '방어',
  },
  {
    nature: 'adamant',
    ko: naturesKoMap.adamant,
    en: 'adamant',
    increase: '공격',
    decrease: '특수공격',
  },
  {
    nature: 'naughty',
    ko: naturesKoMap.naughty,
    en: 'naughty',
    increase: '공격',
    decrease: '특수방어',
  },
  {
    nature: 'brave',
    ko: naturesKoMap.brave,
    en: 'brave',
    increase: '공격',
    decrease: '스피드',
  },

  {
    nature: 'bold',
    ko: naturesKoMap.bold,
    en: 'bold',
    increase: '방어',
    decrease: '공격',
  },
  {
    nature: 'impish',
    ko: naturesKoMap.impish,
    en: 'impish',
    increase: '방어',
    decrease: '특수공격',
  },
  {
    nature: 'lax',
    ko: naturesKoMap.lax,
    en: 'lax',
    increase: '방어',
    decrease: '특수방어',
  },
  {
    nature: 'relaxed',
    ko: naturesKoMap.relaxed,
    en: 'relaxed',
    increase: '방어',
    decrease: '스피드',
  },

  {
    nature: 'modest',
    ko: naturesKoMap.modest,
    en: 'modest',
    increase: '특수공격',
    decrease: '공격',
  },
  {
    nature: 'mild',
    ko: naturesKoMap.mild,
    en: 'mild',
    increase: '특수공격',
    decrease: '방어',
  },
  {
    nature: 'rash',
    ko: naturesKoMap.rash,
    en: 'rash',
    increase: '특수공격',
    decrease: '특수방어',
  },
  {
    nature: 'quiet',
    ko: naturesKoMap.quiet,
    en: 'quiet',
    increase: '특수공격',
    decrease: '스피드',
  },

  {
    nature: 'calm',
    ko: naturesKoMap.calm,
    en: 'calm',
    increase: '특수방어',
    decrease: '공격',
  },
  {
    nature: 'gentle',
    ko: naturesKoMap.gentle,
    en: 'gentle',
    increase: '특수방어',
    decrease: '방어',
  },
  {
    nature: 'careful',
    ko: naturesKoMap.careful,
    en: 'careful',
    increase: '특수방어',
    decrease: '특수공격',
  },
  {
    nature: 'sassy',
    ko: naturesKoMap.sassy,
    en: 'sassy',
    increase: '특수방어',
    decrease: '스피드',
  },

  {
    nature: 'timid',
    ko: naturesKoMap.timid,
    en: 'timid',
    increase: '스피드',
    decrease: '공격',
  },
  {
    nature: 'hasty',
    ko: naturesKoMap.hasty,
    en: 'hasty',
    increase: '스피드',
    decrease: '방어',
  },
  {
    nature: 'jolly',
    ko: naturesKoMap.jolly,
    en: 'jolly',
    increase: '스피드',
    decrease: '특수공격',
  },
  {
    nature: 'naive',
    ko: naturesKoMap.naive,
    en: 'naive',
    increase: '스피드',
    decrease: '특수방어',
  },

  {
    nature: 'hardy',
    ko: naturesKoMap.hardy,
    en: 'hardy',
    increase: null,
    decrease: null,
  },
  {
    nature: 'docile',
    ko: naturesKoMap.docile,
    en: 'docile',
    increase: null,
    decrease: null,
  },
  {
    nature: 'bashful',
    ko: naturesKoMap.bashful,
    en: 'bashful',
    increase: null,
    decrease: null,
  },
  {
    nature: 'quirky',
    ko: naturesKoMap.quirky,
    en: 'quirky',
    increase: null,
    decrease: null,
  },
  {
    nature: 'serious',
    ko: naturesKoMap.serious,
    en: 'serious',
    increase: null,
    decrease: null,
  },
];

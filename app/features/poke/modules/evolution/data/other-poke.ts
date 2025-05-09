export type OtherPoke =
  | 'sirfetchD'
  | 'shedinja'
  | 'runerigus'
  | 'kingambit'
  | 'urshifu_single'
  | 'urshifu_rapid'
  | 'lets_go'
  | 'maushold'
  | 'palafin'
  | 'gholdengo';

const OTHER_POKE_CONTENT: Record<OtherPoke, string> = {
  sirfetchD: '한 전투에서 급소를 3번 맞힌다',
  shedinja:
    '몬스터볼을 가지고 있는 상태에서 포켓몬 슬롯이 1자리 이상 비어 있을 때 토중몬 진화 시 빈 슬롯에 획득',
  runerigus:
    '기절하지 않고 49 이상의 누적 데미지를 입은 후 모래먼지구덩이의 고인돌 아래를 지나간다',
  kingambit: '대장의징표를 지닌 절각참을 3마리 쓰러뜨린 후',
  urshifu_single: '악의 탑을 공략해 악의족자를 보여줌',
  urshifu_rapid: '물의 탑을 공략해 물의족자를 보여줌',
  lets_go: '레츠고 모드에서 1000보 이상 걷고 볼로 돌아 가지 않은 상태에서',
  maushold: '랜덤',
  palafin: '다른 플레이어와 유니온 서클을 플레이하고 있는 상태에서',
  gholdengo: '모으령의코인을 999개 획득 후',
};

export { OTHER_POKE_CONTENT };

import { getPokeTypeKo } from '@/app/lib/poke-type';
import {
  EVOLUTION_LOCATION,
  EVOLUTION_LOCATION_KO,
  type EvolutionLocationKey,
} from '../data/location';
import { EVOLUTION_ITEM_LIST } from '../data/item';
import type { ConditionValue } from '../types';
import { REGION_LIST_KO, type Region } from '../data/region';
import { EVOLUTION_MOVE_LIST } from '../data/move';
import { PARTY_SPECIES_KO, TRADE_SPECIES_KO } from '../data/species';
import { TIME_OF_DAY_KO, type TimeOfDay } from '../data/time-of-day';
import { OTHER_POKE_CONTENT, type OtherPoke } from '../data/other-poke';

export type ConditionText = string | null;

export function getGenderText(value: ConditionValue): ConditionText {
  const genderMap = {
    1: '암컷',
    2: '수컷',
  };

  if (typeof value !== 'number' || (value !== 1 && value !== 2)) {
    return null;
  }

  return genderMap[value];
}

export function getLocationText(value: ConditionValue): ConditionText {
  const isLocation = (location: string): location is EvolutionLocationKey =>
    location in EVOLUTION_LOCATION;

  if (typeof value === 'string' && isLocation(value)) {
    return EVOLUTION_LOCATION_KO[value];
  }

  return null;
}

export function getRegionText(value: ConditionValue): ConditionText {
  const isRegion = (region: string): region is Region =>
    region in REGION_LIST_KO;

  if (typeof value === 'string' && isRegion(value)) {
    return REGION_LIST_KO[value];
  }

  return null;
}

export function getAffectionText(value: ConditionValue): ConditionText {
  if (!value) {
    return null;
  }

  return `절친도 ${value}단계 이상일 때`;
}

export function getBeautyText(value: ConditionValue): ConditionText {
  return `아름다움 수치 MAX(${value}) 상태에서`;
}

export function getHappinessText(value: ConditionValue): ConditionText {
  if (typeof value !== 'number' || value <= 100) {
    return null;
  }

  return '친밀도가 높은 상태에서';
}

export function getLevelText(value: ConditionValue): ConditionText {
  return `Level ${value}`;
}

export function getMoveText(value: ConditionValue): ConditionText {
  const isEvolutionMove = (move: string) => move in EVOLUTION_MOVE_LIST;

  if (typeof value === 'string' && isEvolutionMove(value)) {
    return EVOLUTION_MOVE_LIST[value];
  }

  return null;
}

export function getItemText(value: ConditionValue): ConditionText {
  if (typeof value !== 'string' || !EVOLUTION_ITEM_LIST[value]) {
    return '';
  }

  return EVOLUTION_ITEM_LIST[value];
}

export function getTypeText(value: ConditionValue): ConditionText {
  if (typeof value !== 'string') {
    return null;
  }

  return getPokeTypeKo(value);
}

export function getNeedsOverworldRainText(
  value: ConditionValue,
): ConditionText {
  if (typeof value == 'boolean' && value) {
    return '비가 오는 필드';
  }

  return null;
}

export function getPartySpeciesText(value: ConditionValue): ConditionText {
  if (typeof value !== 'string' || !PARTY_SPECIES_KO[value]) {
    return null;
  }

  return PARTY_SPECIES_KO[value];
}

export function getTradeSpeciesText(value: ConditionValue): ConditionText {
  if (typeof value !== 'string' || !TRADE_SPECIES_KO[value]) {
    return null;
  }

  return TRADE_SPECIES_KO[value];
}

export function getTimeOfDayText(value: ConditionValue): ConditionText {
  const isTimeOfDay = (v: string): v is TimeOfDay => v in TIME_OF_DAY_KO;
  if (typeof value !== 'string' || !isTimeOfDay(value)) {
    return null;
  }

  return TIME_OF_DAY_KO[value];
}

export function getPhysicalStatText(value: ConditionValue): ConditionText {
  if (typeof value !== 'number') {
    return null;
  }

  if (value === 1) {
    return '공격 > 방어';
  }
  if (value === -1) {
    return '공격 < 방어';
  }
  return '공격 = 방어';
}

export function getNatureText(value: ConditionValue): ConditionText {
  if (typeof value !== 'string' || (value !== 'amped' && value !== 'lowKey')) {
    return null;
  }
  const natureMap = {
    amped:
      '노력, 고집, 개구쟁이, 용감, 온순, 장난꾸러기, 촐랑, 덜렁, 변덕, 건방, 성급, 명랑, 천진난만',
    lowKey:
      '외로움, 대담, 무사태평, 조심, 의젓, 수줍음, 냉정, 차분, 얌전, 신중, 겁쟁이, 성실',
  };

  const natureList = natureMap[value];

  return natureList;
}

export function getSpinText(value: ConditionValue): ConditionText {
  if (typeof value !== 'string' || value !== 'sweet') {
    return null;
  }

  return '지니게하고 L스틱으로 캐릭터를 계속 회전';
}

export function getTurnUpsideDownText(value: ConditionValue): ConditionText {
  if (typeof value !== 'boolean' || !value) {
    return null;
  }

  return '기기를 위아래 거꾸로 잡은 상태';
}

export function getRecoilDamageText(value: ConditionValue): ConditionText {
  if (typeof value !== 'number') {
    return null;
  }

  return `누적 반동 데미지 ${value} 이상 입은 상태에서`;
}

export function getOtherText(value: ConditionValue): ConditionText {
  const isOtherPoke = (poke: string): poke is OtherPoke =>
    poke in OTHER_POKE_CONTENT;

  if (typeof value !== 'string' || !isOtherPoke(value)) {
    return null;
  }

  return OTHER_POKE_CONTENT[value];
}

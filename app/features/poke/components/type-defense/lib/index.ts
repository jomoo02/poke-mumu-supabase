import {
  getPokeTypeList,
  isPokeType,
  type PokeType,
} from '@/app/lib/poke-type';
import { typeDefense } from '@/app/lib/poke-type/type-defense';

// 초기 방어 상성 값을 생성
const getInitialTypeDefense = () => {
  const pokeTypeList = getPokeTypeList();

  return pokeTypeList
    .filter((type) => type !== 'unknown')
    .reduce(
      (acc, type) => {
        acc[type] = 1;
        return acc;
      },
      {} as Record<PokeType, number>,
    );
};

// 주어진 types에 따른 방어 상성을 적용
const applyTypeEffectiveness = (types: PokeType[]) => {
  const typeEffectiveness = getInitialTypeDefense();

  const calculateEffectiveness = (
    effectivenessType: PokeType[] | undefined,
    modifier: number,
  ) => {
    effectivenessType?.forEach((type) => {
      typeEffectiveness[type] *= modifier;
    });
  };

  types.forEach((type) => {
    const { superEffective, notVeryEffective, noEffect } = typeDefense[type];

    calculateEffectiveness(superEffective, 2);
    calculateEffectiveness(notVeryEffective, 0.5);
    calculateEffectiveness(noEffect, 0);
  });

  return typeEffectiveness;
};

// 방어 상성을 { 배율, [타입] }[] 형식으로 포맷
export const setPokeTypeDefense = (types: string[]) => {
  if (!types.every(isPokeType)) {
    return null;
  }
  const typeEffectiveness = applyTypeEffectiveness(types);

  const { unknown, ...rest } = typeEffectiveness;
  console.log(rest);
  return Object.entries(rest);

  // const pokeTypeDefense = Object.entries(typeEffectiveness).reduce(
  //   (acc, [type, effectiveness]) => {
  //     acc[effectiveness] ??= [];
  //     acc[effectiveness].push(type as PokeType);
  //     return acc;
  //   },
  //   {} as Record<number, PokeType[]>,
  // );

  // return Object.keys(pokeTypeDefense)
  //   .map(Number)
  //   .sort((a, b) => b - a)
  //   .map((damageRate) => ({
  //     damageRate,
  //     types: pokeTypeDefense[damageRate],
  //   }));
};

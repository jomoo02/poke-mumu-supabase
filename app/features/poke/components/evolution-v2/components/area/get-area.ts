import {
  type EvolutionAreaKey,
  evolutionAreas,
  evolutionRegionLocationsKo,
} from './area-data';

const checkAreaCase = (evolutionId: number) => {
  const areaCase = new Set([34, 62, 123, 265]);

  return areaCase.has(evolutionId);
};

const setAreaMap = (evolutionId: number) => {
  const areaMap: Record<EvolutionAreaKey, number[]> = {
    'magnetic-field': [34, 123, 265],
    'mossy-rock': [62],
    'icy-rock': [62],
    'mount-lanakila': [],
  };

  return evolutionAreas.filter((location) =>
    areaMap[location]?.includes(evolutionId),
  );
};

export const getAreaData = (evolutionId: number) => {
  if (!checkAreaCase(evolutionId)) {
    return null;
  }

  return setAreaMap(evolutionId).map(
    (locationKey) => evolutionRegionLocationsKo[locationKey],
  );
};

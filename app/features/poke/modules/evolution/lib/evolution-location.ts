import {
  type EvolutionLocationKey,
  EVOLUTION_LOCATION,
  EVOLUTION_REGION_LOCATION_KO,
} from '../data/location';

function checkLocationCase(evolutionId: number) {
  const locationCase = new Set([34, 62, 123, 265]);

  return locationCase.has(evolutionId);
}

function setLocationList(evolutionId: number) {
  const locationMap: Record<EvolutionLocationKey, number[]> = {
    magneticField: [34, 123],
    mossyRock: [62],
    icyRock: [62],
    mountLanakila: [265],
  };

  return EVOLUTION_LOCATION.filter((location) =>
    locationMap[location]?.includes(evolutionId),
  );
}

export function getLocation(evolutionId: number) {
  if (!checkLocationCase(evolutionId)) {
    return null;
  }

  return setLocationList(evolutionId).map(
    (locationKey) => EVOLUTION_REGION_LOCATION_KO[locationKey],
  );
}

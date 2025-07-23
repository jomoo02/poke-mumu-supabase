'use server';

import { cache } from 'react';
import dbConnect from '@/app/utils/mongoose/dbConnect';
import EvolutionChainsModel, {
  type EvolutionChain,
} from '../model/EvolutionChains';
import { formatEvolutionData } from '../utils/format-evolution';

export async function fetchEvolutionChains(evolutionId: number | null) {
  if (!evolutionId) {
    return null;
  }

  try {
    await dbConnect();

    const query = { evolution_id: evolutionId };
    const projection = { _id: 0 };

    const evolutionChains = await EvolutionChainsModel.findOne(
      query,
      projection,
    ).lean<EvolutionChain>();

    if (!evolutionChains) {
      return null;
    }

    return formatEvolutionData(evolutionChains);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fetchEvolutionChainAll = cache(async () => {
  try {
    await dbConnect();

    const query = {};
    const projection = { _id: 0 };

    const evolutionChains = await EvolutionChainsModel.find(
      query,
      projection,
    ).lean<EvolutionChain[]>();

    if (!evolutionChains) {
      return [];
    }

    return evolutionChains.map(formatEvolutionData);
  } catch (error) {
    console.error(error);
    return [];
  }
});

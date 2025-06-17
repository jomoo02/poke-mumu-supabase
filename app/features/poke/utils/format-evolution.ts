import type {
  RawPokeInfo,
  EvolutionChain,
  RawDetail,
  RawChain,
} from '../model/EvolutionChains';
import type {
  EvolutionNodeUI,
  EvolutionTreeUI,
  PokeInfoUI,
} from '../components/evolution/types';

type FormattedChains = {
  stage: number;
  toPokeId: number | null;
  fromPokeId: number | null;
  toDetails: RawDetail[];
  toPoke: PokeInfoUI | null;
  fromPoke: PokeInfoUI | null;
}[];

const formatPokeInfo = (pokeInfo: RawPokeInfo): PokeInfoUI => {
  const { id, no, name_ko, form, sprite, poke_key } = pokeInfo;

  return {
    id,
    no,
    form,
    sprite,
    name: name_ko,
    pokeKey: poke_key,
  };
};

const formatChains = (chains: RawChain[]): FormattedChains => {
  const formattedChains = chains.map(
    ({
      stage,
      to_poke,
      from_poke,
      to_poke_id: toPokeId,
      from_poke_id: fromPokeId,
      to_details: toDetails,
    }) => ({
      stage,
      toPokeId,
      fromPokeId,
      toDetails,
      toPoke: to_poke ? formatPokeInfo(to_poke) : null,
      fromPoke: from_poke ? formatPokeInfo(from_poke) : null,
    }),
  );

  return formattedChains;
};

const buildNodeMap = (chains: FormattedChains) => {
  const nodeMap = new Map<number, EvolutionNodeUI>();

  for (const chain of chains) {
    if (!chain.toPoke || !chain.toPokeId) continue;

    const existing = nodeMap.get(chain.toPokeId);

    if (!existing) {
      nodeMap.set(chain.toPokeId, {
        ...chain.toPoke,
        details: chain.toDetails,
        next: [],
      });
    } else {
      existing.details.push(...chain.toDetails);
    }
  }

  return nodeMap;
};

const buildFromMap = (
  chains: FormattedChains,
  nodeMap: Map<number, EvolutionNodeUI>,
) => {
  const fromMap = new Map<number | null, EvolutionNodeUI[]>();

  for (const chain of chains) {
    const { fromPokeId, toPokeId } = chain;

    if (!toPokeId) continue;

    const toNode = nodeMap.get(toPokeId);

    if (!toNode) continue;

    if (!fromMap.has(fromPokeId)) {
      fromMap.set(fromPokeId, []);
    }

    fromMap.get(fromPokeId)!.push(toNode);
  }

  return fromMap;
};

export const formatEvolutionData = (
  evolutionChain: EvolutionChain,
): EvolutionTreeUI => {
  const { evolution_id, chains } = evolutionChain;

  const formattedChains = formatChains(chains);
  const nodeMap = buildNodeMap(formattedChains);
  const fromMap = buildFromMap(formattedChains, nodeMap);

  for (const node of nodeMap.values()) {
    node.next = fromMap.get(node.id) || [];
  }

  const roots = fromMap.get(null)?.sort((a, b) => a.id - b.id) || [];

  return {
    roots,
    id: evolution_id,
  };
};

import type {
  EvolutionPoke,
  EvolutionData,
  EvolutionChain,
} from '../types/evolution';

export function formatEvolutionPokeMap(pokeList: EvolutionPoke[] | null) {
  const pokeMap = new Map<number, EvolutionPoke>();

  if (!pokeList?.length) {
    return pokeMap;
  }

  pokeList.forEach((poke) => {
    pokeMap.set(poke.id, poke);
  });

  return pokeMap;
}

export function buildEvolutionTrees(
  evolutionData: EvolutionData[],
): EvolutionChain[] {
  const fromMap = new Map<number | null, EvolutionChain[]>();

  // 각 from_poke_id 기준으로 to_poke_id를 그룹화
  for (const evo of evolutionData) {
    const node: EvolutionChain = {
      pokeId: evo.to_poke_id,
      toDetail: evo.to_detail || [],
      toPokes: [],
    };

    const fromId = evo.from_poke_id;
    if (!fromMap.has(fromId)) {
      fromMap.set(fromId, []);
    }

    fromMap.get(fromId)!.push(node);
  }

  // 재귀적으로 children 채우기
  function fillChildren(node: EvolutionChain) {
    const children = fromMap.get(node.pokeId) || [];
    node.toPokes = children;
    for (const child of children) {
      fillChildren(child);
    }
  }

  // from_poke_id가 null인 애들 = 루트 포켓몬
  const roots = fromMap.get(null) || [];
  roots.forEach(fillChildren);

  return roots;
}

export function getEvolutionTreeDimensions(evolutionData: EvolutionData[]) {
  const stages = evolutionData.map(({ stage }) => stage);
  const maxDepth = Math.max(...stages);

  const maxWidth = [1, 2, 3, 4].reduce((max, stage) => {
    const count = evolutionData.filter((evo) => evo.stage === stage).length;
    return Math.max(max, count);
  }, 0);

  return {
    maxDepth,
    maxWidth,
  };
}

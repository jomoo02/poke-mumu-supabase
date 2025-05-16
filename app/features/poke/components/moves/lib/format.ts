import type { VersionGroup } from '@/app/data/version-group/version-group';
import type { PokeMoveTableWithVersion, PokeMoveJsonByMethod } from '../types';

// move table에서 가져온 데이터 포맷
export function formatMovesFromTable(tableMoves: PokeMoveTableWithVersion[]) {
  return tableMoves
    .map(({ version_group, moves, ...rest }) => ({
      ...rest,
      gen: version_group.generation,
      versionGroupId: version_group.id,
      versionGroup: version_group.identifier as VersionGroup,
      order: version_group.order,
      moves: moves as PokeMoveJsonByMethod,
    }))
    .sort((a, b) => a.order - b.order);
}

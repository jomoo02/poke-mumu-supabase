import { createClient } from '@/app/utils/supabase/client';
import type { Database } from '@/types_db';
// import MoveTable from '@/app/features/move/components/move-table';
import { getPokeTypeKo } from '@/app/lib/poke-type';
import formatMove from './utils-sec';
import MoveTableGen1 from './move-table';
import PodicCompareTable from './tool/podic-compare';
import ToolBul from './tool-bul';

interface GameVersionPageProps {
  params: Promise<{ version: string }>;
}

const versionDBMap = {
  'red-blue-yellow': 'move_list_gen1',
} as const;

type VersionKey = keyof typeof versionDBMap;
type TableName = (typeof versionDBMap)[VersionKey];

type TableRow<T extends TableName> = Database['public']['Tables'][T]['Row'];
// 4. 제네릭 fetch 함수

async function fetchTableByVersion<V extends VersionKey>(
  version: V,
): Promise<TableRow<(typeof versionDBMap)[V]>[]> {
  const tableName = versionDBMap[version];
  const supabase = createClient();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .returns<TableRow<typeof tableName>[]>();

  if (error || !data) throw new Error('데이터 조회 실패');
  return data;
}

export default async function GameVersionPage({
  params,
}: GameVersionPageProps) {
  // const supabase = createClient();

  const { version } = await params;

  if (!(version in versionDBMap)) return <div>존재하지 않는 버전</div>;
  const data = await fetchTableByVersion(version as VersionKey);
  const dddd = formatMove(data);

  const moves = data
    .sort((a, b) => a.id - b.id)
    .map((d, index) => {
      const { id, damage_class, name_ko, accuracy, type, power, pp } = d;
      const damageClass = (() => {
        if (damage_class === 'physical') return '물리';
        if (damage_class === 'special') return '특수';
        if (damage_class === 'status') return '변화';
        return '???';
      })();
      return {
        id: index + 1,
        type: getPokeTypeKo(type),
        power,
        pp,
        accuracy,
        damageClass: damageClass,
        name: name_ko,
      };
    });

  return (
    <div>
      {/* <MoveTableGen1 /> */}
      {/* <PodicCompareTable /> */}
      <ToolBul />
    </div>
  );
}

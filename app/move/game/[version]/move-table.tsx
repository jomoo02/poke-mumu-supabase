import MoveTable from '@/app/features/move/components/move-table';
import { d } from './edit';

export default function MoveTableGen1() {
  const moves = d;

  return (
    <div>
      <MoveTable moves={moves} />
    </div>
  );
}

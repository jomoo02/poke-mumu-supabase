import type { MoveMethod, MachineType } from '../../types';
import { getMoveTableTitle } from '../../lib/move-table';

interface TitleProps {
  moveMethod: MoveMethod;
  machineType?: MachineType;
}

export default function Title({ moveMethod, machineType }: TitleProps) {
  const title = getMoveTableTitle(moveMethod, machineType);

  return <h4 className="font-bold my-2 lg:text-lg">{title}</h4>;
}

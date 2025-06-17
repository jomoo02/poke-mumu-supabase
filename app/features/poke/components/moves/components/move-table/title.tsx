import { MachineType } from '../../types';

interface TitleProps {
  method: string;
  machineType?: MachineType;
}

export default function Title({ method, machineType }: TitleProps) {
  const titleMap: Record<string, string> = {
    level_up: '레벌 업으로 익히는 기술',
    egg: '교배를 통해 유전 받을 수 있는 기술',
    tutor: 'NPC로부터 배울 수 있는 기술',
    reminder: '떠올리기로 익히는 기술',
    pre: '이전 진화에서만 얻을 수 있는 기술',
    HM: '기술머신 HM으로 익히는 기술',
    TM: '기술머신 TM으로 익히는 기술',
    TR: '기술머신 TR로 익히는 기술',
    default: '기술',
  } as const;

  const title =
    (machineType && titleMap[machineType]) ||
    titleMap[method] ||
    titleMap.default;

  return <h3 className="text-slate-800 text-lg font-medium my-2">{title}</h3>;
}

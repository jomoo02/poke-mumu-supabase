import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';
import type { PokeMove, MoveMethod } from '../../types';

interface TableRowProps {
  method: MoveMethod;
  move: PokeMove;
}

export default function TableRow({ method, move }: TableRowProps) {
  const { name, type, damage_class, power, accuracy } = move;

  return (
    <tr className="h-9 c-text-base">
      {method === 'level_up' && (
        <td className="px-2 border border-slate-300 text-nowrap">
          {move.level}
        </td>
      )}
      {method === 'machine' && (
        <td className="px-2 border border-slate-300 text-nowrap">
          {move.machine_number}
        </td>
      )}
      <td className="px-2 border border-slate-300 text-nowrap font-semibold">
        {name}
      </td>
      <td align="center" className="border border-slate-300">
        <PokeTypeBadge type={type} />
      </td>
      <td align="center" className="border border-slate-300">
        <DamageClassBadge damageClass={damage_class} />
      </td>
      <td align="right" className="border border-slate-300 px-2">
        {power || '—'}
      </td>
      <td align="right" className="border border-slate-300 px-2">
        {accuracy || '—'}
      </td>
    </tr>
  );
}

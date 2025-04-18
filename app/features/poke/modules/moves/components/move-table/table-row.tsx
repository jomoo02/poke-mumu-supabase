import { PokeMove, MoveMethod } from '../../types';

interface TableRowProps {
  method: MoveMethod;
  move: PokeMove;
}

export default function TableRow({ method, move }: TableRowProps) {
  const { name, type, damage_class, power, accuracy } = move;
  return (
    <tr className="h-9 c-text-base">
      <td className="px-1.5 broder border-slate-300 text-nowrap">{name}</td>
      <td align="center" className="border border-slate-300">
        {type}
      </td>
      <td align="center" className="border border-slate-300">
        {damage_class}
      </td>
      <td align="right" className="border border-slate-300">
        {power || '—'}
      </td>
      <td align="right" className="border border-slate-300">
        {accuracy || '—'}
      </td>
    </tr>
  );
}

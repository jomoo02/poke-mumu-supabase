'use client';

import type { VarietyPoke } from '../../types';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { VarietyItem } from './variety-item';
import useUnderlineMotion from './useUnderlineMotion';

interface VarietyListProps {
  ndex: number;
  speciesVarieties: VarietyPoke[];
}

export default function VarietyList({
  ndex,
  speciesVarieties,
}: VarietyListProps) {
  const params = useParams<{ form: string }>();

  const formattedVarietyList = speciesVarieties.map(
    ({ form, poke_key, name_ko }) => {
      const name = form ? `${name_ko} (${form})` : name_ko;
      return {
        pokeKey: poke_key,
        name,
        href: `/pokedex/${ndex}/${poke_key}`,
        form: poke_key,
      };
    },
  );

  const { containerRef, itemRefs, indicatorStyle } =
    useUnderlineMotion<HTMLDivElement>(params.form);

  return (
    <div
      ref={containerRef}
      className="flex border-b border-slate-200 py-2 relative"
    >
      <div className="flex">
        {formattedVarietyList.map((v, index) => (
          <VarietyItem
            key={v.form}
            name={v.name}
            href={v.href}
            isActive={params.form === v.form}
            innerRef={(el) => (itemRefs.current[index] = el)}
          />
        ))}
      </div>
      <motion.div
        className="absolute bottom-0 h-0.5 bg-zinc-900"
        animate={indicatorStyle}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}

'use client';

import type { VarietyPoke } from '../types';
import { useRef, useState, useLayoutEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface VarietyListProps {
  ndex: number;
  speciesVarieties: VarietyPoke[];
}

export default function VarietyList({
  ndex,
  speciesVarieties,
}: VarietyListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const params = useParams<{ form: string }>();

  const formattedVarietyList = speciesVarieties.map(
    ({ form, poke_key, name_ko }) => {
      return {
        pokeKey: poke_key,
        name: name_ko,
        href: `/pokedex/${ndex}/${poke_key}`,
        formText: form,
        form: poke_key,
      };
    },
  );

  useLayoutEffect(() => {
    const index = formattedVarietyList.findIndex((v) => v.form === params.form);
    const activeEl = linkRefs.current[index];
    const containerEl = containerRef.current;

    if (activeEl && containerEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setIndicatorStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, [params.form]);

  return (
    <div
      ref={containerRef}
      className="flex gap-x-2 border-b border-slate-200 py-2 relative"
    >
      <div className="flex space-x-8">
        {formattedVarietyList.map((v, index) => {
          const isActive = params.form === v.form;

          return (
            <div
              key={v.form}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              className="inline-block px-4 py-.5"
            >
              <Link
                href={v.href}
                className={`font-medium ${
                  isActive ? 'text-black' : 'text-zinc-500 hover:text-black'
                }`}
              >
                {v.name}
              </Link>
            </div>
          );
        })}
      </div>

      <motion.div
        className="absolute bottom-0 h-0.5 bg-black"
        animate={indicatorStyle}
        transition={{ type: 'spring', stiffness: 250, damping: 30 }}
      />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useParams } from 'next/navigation';

interface VarietyProps {
  form: string;
  name: string;
  href: string;
  formText: string | null;
}

export default function Variety({ name, form, href, formText }: VarietyProps) {
  const params = useParams<{ form: string }>();

  const isActive = params.form === form;

  const linkRef = useRef<HTMLAnchorElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    if (isActive && linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      const parentRect = linkRef.current.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  }, [isActive]);

  return (
    <div>
      <Link
        href={href}
        ref={linkRef}
        className={`px-3.5 py-1 h-9 text-nowrap font-medium bg-white outline-none ring-offset-1 focus-visible:ring-2 ring-zinc-500`}
      >
        <span
          className={`${
            isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          {name}
        </span>
        {formText && (
          <span className={`pl-0.5 ${isActive ? 'text-zinc-900' : ''}`}>
            ({formText})
          </span>
        )}
      </Link>
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5">
          <div
            className="absolute bg-zinc-900 h-full transition-all duration-300 ease-in-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </div>
      )}
    </div>
  );
}

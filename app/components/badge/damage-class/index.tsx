import Image from 'next/image';

export type DamageClass = 'physical' | 'special' | 'status';

interface DamageClassBadgeProps {
  damageClass: string;
}

const isValidDamageClass = (value: string): value is DamageClass => {
  return value === 'physical' || value === 'special' || value === 'status';
};

export default function DamageClassBadge({
  damageClass,
}: DamageClassBadgeProps) {
  if (!isValidDamageClass(damageClass)) {
    return (
      <div className="w-[60px] h-[25px] rounded-[5px] border border-zinc-700/8">
        ???
      </div>
    );
  }

  const bgVariants: Record<DamageClass, string> = {
    physical: 'bg-orange-400/90',
    special: 'bg-blue-400/90',
    status: 'bg-gray-400/90',
  } as const;

  const srcMap: Record<DamageClass, string> = {
    physical: '/damageclass/physical.png',
    special: '/damageclass/special.png',
    status: '/damageclass/status.png',
  };

  return (
    <div
      className={`${bgVariants[damageClass]} w-[60px] h-[25px] rounded-[5px] border border-zinc-700/80 relative overflow-hidden`}
    >
      <Image
        src={srcMap[damageClass]}
        alt={damageClass}
        fill
        priority
        sizes="20px"
        style={{
          objectFit: 'contain',
          objectPosition: 'center',
          padding: '2px 0',
        }}
      />
    </div>
  );
}

import Image from 'next/image';

export type DamageClass = 'physical' | 'special' | 'status';

interface DamageClassBadgeProps {
  damageClass: DamageClass;
}

export default function DamageClassBadge({
  damageClass,
}: DamageClassBadgeProps) {
  const bgVariants: Record<DamageClass, string> = {
    physical: 'bg-orange-400/90',
    special: 'bg-blue-400/90',
    status: 'bg-gray-400/90',
  };

  const srcMap: Record<DamageClass, string> = {
    physical: '/damageclass/physical.png',
    special: '/damageclass/special.png',
    status: '/damageclass/status.png',
  };

  return (
    <div
      className={`${bgVariants[damageClass]} w-[60px] h-[25px] rounded-[5px] border border-zinc-700/80 relative`}
    >
      <Image
        src={srcMap[damageClass]}
        alt={damageClass}
        fill
        sizes="20px"
        style={{ objectFit: 'contain', padding: '2px 0' }}
      />
    </div>
  );
}

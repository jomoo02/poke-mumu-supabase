interface GenderBarProps {
  male?: number; // 0~100 비율
  female?: number; // 0~100 비율
}

export default function GenderBar({ male, female }: GenderBarProps) {
  const hasData = male !== undefined && female !== undefined;

  const maleWidth = hasData ? `${male}%` : '100%';
  const femaleWidth = hasData ? `${female}%` : '0%';
  console.log(hasData, male, female);

  return (
    <div className="rounded-md overflow-hidden w-full">
      <svg
        width="100%"
        height="14"
        viewBox="0 0 100 14"
        preserveAspectRatio="none"
      >
        {hasData ? (
          <>
            <rect fill="#2563EB" width={maleWidth} height="14" />
            <rect fill="#F472B6" x={male} width={femaleWidth} height="14" />
          </>
        ) : (
          <rect fill="#10284d" width="100" height="14" />
        )}
      </svg>
    </div>
  );
}

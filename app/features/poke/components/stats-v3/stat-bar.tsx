interface StatBarProps {
  value: number;
  max: number;
  color?: string;
}

export default function StatBar({ value, max, color }: StatBarProps) {
  const width = (() => {
    const scaleFactor = max < 200 ? 255 : 270;
    const barWidth = `${(value / scaleFactor) * 100}%`;

    return barWidth;
  })();

  const ranges = [
    { min: 150, color: '#1D4ED8' }, // darkest
    { min: 125, color: '#2563EB' },
    { min: 100, color: '#3B82F6' }, // primary
    { min: 50, color: '#60A5FA' },
    { min: -Infinity, color: '#93C5FD' }, // lightest
  ];

  const barColor = color ?? ranges.find((r) => value >= r.min)!.color;

  return (
    <svg width="100%" height="16">
      <g className="bars">
        <rect fill="#ede7e7" width="100%" height="16" rx="5" />
        <rect fill={barColor} width={width} height="16" rx="5" />
      </g>
    </svg>
  );
}

interface GenderBarProps {
  male?: number; // 0~100 비율
  female?: number; // 0~100 비율
}

export function GenderBar({ male, female }: GenderBarProps) {
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

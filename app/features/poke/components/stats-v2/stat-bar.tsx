interface StatBarProps {
  value: number;
  max: number;
}

export default function StatBar({ value, max }: StatBarProps) {
  const width = (() => {
    const scaleFactor = max < 200 ? 255 : 300;
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

  const barColor = ranges.find((r) => value >= r.min)!.color;
  return (
    <svg width="100%" height="12">
      <g className="bars">
        <rect fill={barColor} width={width} height="12" rx="4" />
      </g>
    </svg>
  );
}

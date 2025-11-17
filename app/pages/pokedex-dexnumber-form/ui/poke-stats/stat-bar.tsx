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
        <rect fill="#f2f3f4" width="100%" height="15" rx="5" />
        <rect fill={barColor} width={width} height="15" rx={5} />
      </g>
    </svg>
  );
}

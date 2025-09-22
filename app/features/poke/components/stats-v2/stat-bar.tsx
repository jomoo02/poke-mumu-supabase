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

  const barColor = (() => {
    if (value > 200) return '#06b6d4';
    if (value >= 130) return '#22c55e';
    if (value >= 100) return '#84cc16';
    if (value >= 70) return '#42381e';
    if (value >= 30) return '#f97316';
    return '#dc2626';
  })();

  return (
    <svg width="100%" height="12">
      <g className="bars">
        <rect fill={barColor} width={width} height="12" rx="4" />
      </g>
    </svg>
  );
}

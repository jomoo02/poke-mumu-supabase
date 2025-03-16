interface StatListProps {
  stats: {
    attack: number;
    defense: number;
    hp: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  } | null;
}

export default function StatList({ stats }: StatListProps) {
  if (!stats) {
    return null;
  }

  const total = Object.values(stats).reduce((acc, cur) => acc + cur, 0);

  const statList = [
    { stat: 'total', value: total },
    { stat: 'hp', value: stats.hp },
    { stat: 'attack', value: stats.attack },
    { stat: 'defense', value: stats.defense },
    { stat: 'special_attack', value: stats.special_attack },
    { stat: 'special_defense', value: stats.special_defense },
    { stat: 'speed', value: stats.speed },
  ];

  return (
    <>
      {statList.map(({ stat, value }) => (
        <td
          key={stat}
          className="w-20 xl:w-24 px-3 font-semibold text-slate-700/90"
        >
          {value}
        </td>
      ))}
    </>
  );
}

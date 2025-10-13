/**
 * 포켓몬 최종 포획 확률을 계산합니다.
 *
 * @param hpMax        최대 HP
 * @param hpCurrent    현재 HP
 * @param catchRate    포켓몬 기본 포획률(0‒255)
 * @param ballBonus    몬스터볼 보정 배수 (기본값 1.0)
 * @param statusBonus  상태이상 보정 배수 (기본값 1.0)
 * @returns            최종 포획 확률 (0‒1)
 */
export function getCatchProbability({
  hpMax,
  hpCurrent,
  catchRate,
  ballBonus = 1,
  statusBonus = 1,
}: {
  hpMax: number;
  hpCurrent: number;
  catchRate: number;
  ballBonus?: number;
  statusBonus?: number;
}): number {
  // 1) a 값
  const a =
    (((3 * hpMax - 2 * hpCurrent) * catchRate * ballBonus) / (3 * hpMax)) *
    statusBonus;

  // 2) a ≥ 255 → 확률 100 %
  if (a >= 255) return 1;

  // 3) b 값
  const b = 65535 * Math.pow(a / 255, 0.25);

  // 4) 최종 확률 = (b / 65536)^4
  const p = b / 65536;
  return Math.pow(p, 4);
}

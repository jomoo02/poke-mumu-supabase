export default function NatureSystem() {
  return (
    <div>
      <h2
        id="nature-system"
        className="text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 text-slate-900 pt-10 border-t border-gray-200"
      >
        게임 내 성격 시스템
      </h2>
      <div className="grid gap-y-4">
        <div className="space-y-2 my-2.5">
          <p className="break-keep text-pretty text-slate-800">
            성격은 포켓몬이 좋아하는 맛과 싫어하는 맛에 영향을 끼칩니다. 각 맛은
            하나의 능력치와 연관이 있습니다.
          </p>
          <ul className="list-disc px-6 text-slate-800">
            <li>공격 - 매운맛</li>
            <li>방어 - 신맛</li>
            <li>특수공격 - 떫은맛</li>
            <li>특수방어 - 쓴맛</li>
            <li>스피드 - 단맛</li>
          </ul>
          <p className="break-keep text-pretty text-slate-800">
            포켓몬이 좋아하는 맛은 상승하는 능력치에 해당하는 맛이고, 싫어하는
            맛은 하락하는 능력치에 해당하는 맛입니다.
          </p>
        </div>

        <div className="space-y-2 my-2.5">
          <p className="break-keep text-pretty text-slate-800">
            《에메랄드》 버전부터는 교배와 싱크로 특성을 통해 원하는 성격의
            포켓몬을 얻을 수 있게 되었습니다.
          </p>
          <p className="break-keep text-pretty text-slate-800">
            암컷 포켓몬 또는 메타몽이 변함없는돌을 지닌 상태로 교배하면,
            태어나는 포켓몬이 50% 확률로 해당 포켓몬의 성격을 유전받습니다.
          </p>
          <p className="break-keep text-pretty text-slate-800">
            싱크로 특성을 지닌 포켓몬을 파티 선두에 두면, 야생 포켓몬이 50%
            확률로 같은 성격을 가지게 됩니다.
          </p>
          <p className="break-keep text-pretty text-slate-800">
            (단, 9세대부터는 이 효과가 제거되었습니다.)
          </p>
        </div>

        <div className="my-2.5 space-y-2">
          <p className="break-keep text-pretty text-slate-800">
            {`《에메랄드》 버전부터 《기라티나》 버전까지는 성격 유전의 우선도가 존재했으며, 우선순위는 메타몽 > 암컷 > 수컷 순이었습니다.`}
          </p>
          <p className="break-keep text-pretty text-slate-800">
            《하트골드·소울실버》 버전에서는 이 우선도가 사라졌으며,
            변함없는돌을 지닌 포켓몬이라면 성별과 관계없이 50% 확률로 성격을
            유전할 수 있게 되었습니다.
          </p>
          <p className="break-keep text-pretty text-slate-800">
            《블랙 2·화이트 2》 버전부터는 유전 확률이 100%로 상향되었습니다.
          </p>
        </div>

        <p className="break-keep text-pretty my-2.5 text-slate-800">
          《소드·실드》 버전부터는 성격 민트를 사용해 능력치를 변경할 수
          있습니다. 이 경우 실제 성격은 변하지 않으며, 능력치에만 영향을 줍니다.
        </p>
      </div>
    </div>
  );
}

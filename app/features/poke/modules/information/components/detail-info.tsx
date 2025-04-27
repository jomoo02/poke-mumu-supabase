import InfoItem from './info-item';
import InfoTitle from './info-title';

interface DetailInfoProps {
  detail: {
    growthCurve: {
      growthRate: string;
      expPointAtLevel50: number;
      expPointAtLevel100: number;
    };
    baseFriendShip: string;
    captureRate: string;
    effortValues: string[];
  };
}

export default function DetailInfo({ detail }: DetailInfoProps) {
  const { growthCurve, baseFriendShip, captureRate, effortValues } = detail;

  const { growthRate, expPointAtLevel100, expPointAtLevel50 } = growthCurve;

  const atLevel50Text = 'Lv.1 -> Lv.50';
  const atLevel100Text = 'Lv.1 -> Lv.100';

  const effortValuesText = effortValues.join(', ');

  return (
    <div>
      <InfoTitle category="detail" />
      <div>
        <InfoItem subject="노력치" content={effortValuesText} />
        <InfoItem subject="포획률" content={captureRate} />
        <InfoItem subject="기초 친밀도" content={baseFriendShip} />
        <InfoItem subject="성장">
          <div className="flex flex-col gap-y-1">
            <div className="truncate">{growthRate}</div>
            <div className="truncate">
              <span className="text-slate-500 text-xs lg:text-sm">
                {atLevel50Text}
              </span>
              {' : '}
              {expPointAtLevel50.toLocaleString()}
            </div>
            <div className="truncate">
              <span className="text-slate-500 text-xs lg:text-sm">
                {atLevel100Text}
              </span>
              {' : '}
              {expPointAtLevel100.toLocaleString()}
            </div>
          </div>
        </InfoItem>
      </div>
    </div>
  );
}

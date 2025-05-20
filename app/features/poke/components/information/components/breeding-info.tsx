import { Fragment } from 'react';
import InfoItem from './info-item';
import InfoTitle from './info-title';

interface BreedingInfoProps {
  breeding: {
    eggGroups: string[];
    genderRatio: string;
    hatchCounter: string;
  };
}

export default function BreedingInfo({ breeding }: BreedingInfoProps) {
  const { eggGroups, genderRatio, hatchCounter } = breeding;

  const [male, female] = genderRatio.split('-');

  return (
    <div>
      <InfoTitle category="breeding" />
      <div>
        <InfoItem subject="알 그룹">
          <p>
            {eggGroups.map((eggGroup, index) => (
              <Fragment key={eggGroup}>
                <span>{eggGroup}</span>
                {index < eggGroups.length - 1 && <span>, </span>}
              </Fragment>
            ))}
          </p>
        </InfoItem>
        <InfoItem subject="성비" content={genderRatio}>
          <p>
            {male === '무성' ? (
              <span className="text-slate-800 text-nowrap">{male}</span>
            ) : (
              <>
                <span className="text-blue-600 text-nowrap">수컷 : {male}</span>
                ,{' '}
                <span className="text-pink-600 text-nowrap">
                  암컷 : {female}
                </span>
              </>
            )}
          </p>
        </InfoItem>
        <InfoItem subject="부화 카운트" content={hatchCounter} />
      </div>
    </div>
  );
}

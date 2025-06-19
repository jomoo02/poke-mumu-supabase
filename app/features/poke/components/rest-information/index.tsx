import SectionHeader from '../section-header';
import type { Detail, Breeding, EffortValue } from './types';
import BreedingInfoV3 from './components/breeding-info-v3';
import DetailInfoV3 from './components/detail-info-v3';

interface RestInformationProps {
  detail: Detail | null;
  breeding: Breeding | null;
  effortValues: EffortValue[];
}

export default function RestInformation({
  detail,
  breeding,
  effortValues,
}: RestInformationProps) {
  return (
    <div>
      <SectionHeader id="rest-information" sectionTitle="기타 정보" />
      <div className="flex flex-col gap-14 sm:justify-between p-1">
        <BreedingInfoV3 breeding={breeding} />
        <DetailInfoV3 detail={detail} effortValues={effortValues} />
      </div>
    </div>
  );
}

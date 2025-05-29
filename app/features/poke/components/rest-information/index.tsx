import SectionHeader from '../section-header';
import type { Detail, Breeding, EffortValue } from './types';
// import BreedingInfo from './components/breeding-info';
// import DetailInfo from './components/detail-info';
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
      {/* <div className="grid lg:grid-cols-4 border border-gray-200 rounded-lg bg-gray-50/30 shadow-md shadow-gray-200"> */}
      <div className="flex flex-col gap-14 sm:justify-between p-1">
        <BreedingInfoV3 breeding={breeding} />
        <DetailInfoV3 detail={detail} effortValues={effortValues} />
      </div>

      {/* </div> */}
    </div>
  );
}

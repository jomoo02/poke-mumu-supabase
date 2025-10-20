import SectionHeader from '../section-header';
import type { Detail, Breeding, EffortValue } from './types';
import DetailInfo from './components/detail-info';
import BreedingInfo from './components/breeding-info';
import TestInfo from './components/test';

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
    <div className="flex flex-col justify-end lg:items-center">
      {/* <SectionHeader id="rest-information" sectionTitle="기타 정보" /> */}

      <div className="grid gap-8 lg:px-8">
        <BreedingInfo breeding={breeding} />
        <DetailInfo detail={detail} effortValues={effortValues} />
        <div className="grid">{/* <TestInfo /> */}</div>
      </div>
    </div>
  );
}

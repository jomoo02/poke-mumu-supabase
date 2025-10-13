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
    <div className="">
      <SectionHeader id="rest-information" sectionTitle="기타 정보" />
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
        <DetailInfo detail={detail} effortValues={effortValues} />
        <BreedingInfo breeding={breeding} />
        {/* <TestInfo breeding={breeding} /> */}
      </div>
    </div>
  );
}

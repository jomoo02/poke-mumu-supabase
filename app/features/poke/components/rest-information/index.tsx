import SectionHeader from '../section-header';
import type { Detail, Breeding, EffortValue } from './types';
import BreedingInfo from './components/breeding-info';
import DetailInfo from './components/detail-info';

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
      {/* <div className="grid lg:grid-cols-2 gap-14 p-4 lg:p-5.5 "> */}
      <div className="grid lg:grid-cols-4 border border-zinc-200 rounded-lg bg-zinc-50/30 shadow-md shadow-zinc-100">
        <BreedingInfo breeding={breeding} />
        <DetailInfo detail={detail} effortValues={effortValues} />
      </div>
    </div>
  );
}

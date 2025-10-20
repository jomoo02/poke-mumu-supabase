import SectionHeader from '../section-header';
import type { Detail, Breeding, EffortValue } from './types';
import DetailInfo from './components/detail-info';
import BreedingInfo from './components/breeding-info';

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
      <div className="grid gap-10 items-end">
        <BreedingInfo breeding={breeding} />
        <DetailInfo detail={detail} effortValues={effortValues} />
      </div>
    </div>
  );
}

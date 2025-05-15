import {
  VERSION_GROUP_LIST_KO,
  type VersionGroup,
} from '@/app/data/version-group/version-group';

interface VersionListProps {
  versionGroups: VersionGroup[];
  targetVersionGroup: string;
  setTargetVersion: (version: VersionGroup) => void;
}

export default function VersionList({
  versionGroups,
  targetVersionGroup,
  setTargetVersion,
}: VersionListProps) {
  const versionList = versionGroups.map((versionGroup) => {
    const isActive = versionGroup === targetVersionGroup;
    const content = VERSION_GROUP_LIST_KO[versionGroup];
    return {
      versionGroup,
      content,
      isActive,
    };
  });

  const handleVersionClick = (version: VersionGroup) => {
    setTargetVersion(version);
  };

  return (
    <div className="flex gap-x-2 gap-y-1 lg:gap-x-1.5 overflow-auto py-2.5 sm:py-0">
      {versionList.map(({ versionGroup, content, isActive }) => (
        <button
          key={versionGroup}
          onClick={() => handleVersionClick(versionGroup)}
          className={`border-2 text-nowrap cursor-pointer border-slate-500 sm:border-b-0 rounded-md sm:rounded-lg sm:rounded-b-none py-1 px-2 lg:px-3.5 c-text-base font-semibold transition-colors duration-200 ${
            isActive
              ? 'bg-slate-700 border-slate-700 text-white text-center flex items-center justify-center'
              : 'bg-white hover:bg-blue-50'
          }`}
        >
          {content}
        </button>
      ))}
    </div>
  );
}

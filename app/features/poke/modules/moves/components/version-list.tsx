interface VersionListProps {
  versions: string[];
  targetVersion: string;
  setTargetVersion: (version: string) => void;
}

export default function VersionList({
  versions,
  targetVersion,
  setTargetVersion,
}: VersionListProps) {
  const versionList = versions.map((version) => {
    const isActive = version === targetVersion;

    return {
      version,
      isActive,
    };
  });

  const handleVersionClick = (version: string) => {
    setTargetVersion(version);
  };

  return (
    <div className="flex gap-x-2 gap-y-1 lg:gap-x-1.5 overflow-auto py-2.5 sm:py-0">
      {versionList.map(({ version, isActive }) => (
        <button
          key={version}
          onClick={() => handleVersionClick(version)}
          className={`border-2 text-nowrap border-slate-500 sm:border-b-0 rounded-md sm:rounded-lg sm:rounded-b-none py-1 px-2 lg:px-3.5 c-text-base transition-colors duration-200 ${isActive ? 'bg-slate-700 border-slate-700 text-white text-center flex items-center justify-center' : 'bg-white hover:bg-blue-50'}`}
        >
          {version}
        </button>
      ))}
    </div>
  );
}

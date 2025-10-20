import { getAreaData } from './get-area';

interface AreaProps {
  evolutionId: number;
}

export default function Area({ evolutionId }: AreaProps) {
  const areaData = getAreaData(evolutionId);

  if (!areaData || areaData.length === 0) {
    return null;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-x-24 xl:gap-x-32 gap-y-6 pt-10">
      {areaData.map(({ id, title, locations }) => (
        <div key={id}>
          <h3 className="text-slate-800 text-lg font-medium my-2">{title}</h3>
          <div className="border rounded-lg border-gray-200 grid divide-y divide-gray-200 shadow-md shadow-gray-200">
            {locations.map(({ region, location }) => (
              <div
                key={region}
                className="grid divide-x divide-gray-200 grid-cols-5 h-10 items-stretch first:rounded-tl-lg overflow-hidden last:rounded-bl-lg"
              >
                <div className="flex text-slate-700 text-[15px] font-medium justify-center items-center bg-neutral-100 ">
                  {region}
                </div>
                <div className="col-span-4 text-slate-800 text-[15px] flex items-center px-2">
                  {location}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

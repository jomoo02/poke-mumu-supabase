import { getLocation } from '../lib/evolution-location';

interface LocationProps {
  evolutionId: number;
}

export default function Location({ evolutionId }: LocationProps) {
  const locationData = getLocation(evolutionId);

  if (!locationData || locationData.length === 0) {
    return null;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-x-24 xl:gap-x-32 gap-y-6">
      {locationData.map(({ id, title, locations }) => (
        <div key={id}>
          <h4 className="flex py-1.5 font-bold items-center text-lg text-slate-800">
            {title}
          </h4>
          <div className="c-border-outer rounded-lg grid divide-y divide-slate-300">
            {locations.map(({ region, location }) => (
              <div
                key={region}
                className="grid divide-x divide-slate-300 grid-cols-5 c-text-base h-10 items-stretch"
              >
                <div className="flex justify-center items-center bg-slate-100 rounded-s-lg">
                  {region}
                </div>
                <div className="col-span-4 flex items-center px-2">
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

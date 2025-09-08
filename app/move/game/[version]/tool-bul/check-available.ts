import availableList from './available-letsgo.json';
// import fetchSupa from './fetch-supa';

import { data } from './letsgo-data';

export default async function checkAvailable() {
  // const data = await fetchSupa();

  // const dataLen = data.length;
  // const listLen = availableList.length;
  const setAvailableList = [...new Set(availableList.map(({ id }) => id))];
  // const listLen = .length;

  console.log(setAvailableList.length, data.length);

  return setAvailableList.map((id) => {
    const target = data.find(({ move_id }) => move_id === id);
    const { id: targetId, version_group_id, ...rest } = target;
    return {
      ...rest,
      version_group_id: 17,
    };
  });
}

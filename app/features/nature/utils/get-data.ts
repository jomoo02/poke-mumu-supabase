import {
  naturesTable,
  naturesKoMap,
  natures,
  natureStatMap,
  naturesTableV2,
  type Nature,
} from '../data/nature';

export function getNatureKoNmae(value: string): string | null {
  if (value in naturesKoMap) {
    return naturesKoMap[value as Nature];
  }
  return null;
}

export function getNatureTableData() {
  const data = naturesTable;
  const headerData = data[0];

  const bodyData = data.slice(1).map((row) => {
    const firstCell = row[0];

    const updatedRow = row.slice(1).map((cell) => {
      const koName = getNatureKoNmae(cell);

      return {
        en: cell,
        ko: koName,
      };
    });

    return [{ ko: firstCell, en: '' }, ...updatedRow];
  });

  return {
    headerData,
    bodyData,
  };
}

export function getNatureComboboxData() {
  const comboboxData = [...natures].map((nature) => {
    const koNature = getNatureKoNmae(nature);
    const label = `${koNature} · ${nature[0].toUpperCase() + nature.slice(1)}`;
    const value = nature;
    return { label, value };
  });
  return comboboxData;
}

export const getSelectedNatureData = (selectedNature: Nature) => {
  const { increase, decrease } = natureStatMap[selectedNature];
  const koNature = getNatureKoNmae(selectedNature);
  const nature = `${koNature} · ${selectedNature[0].toUpperCase() + selectedNature.slice(1)}`;
  return { nature, increase, decrease };
};

export const getNatureTableV2Data = () => {
  const headerData = ['성격', '영칭', '상승', '하락'];
  const bodyData = naturesTableV2;
  return { headerData, bodyData };
};

import {
  naturesTable,
  naturesKoMap,
  natures,
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
    const label = `${koNature} · ${nature}`;
    const value = nature;
    return { label, value };
  });
  return comboboxData;
}

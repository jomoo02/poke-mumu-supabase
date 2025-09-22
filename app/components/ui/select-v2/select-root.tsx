import { SelectProvider, type SelectProviderProps } from './context';

export default function SelectRoot(props: SelectProviderProps) {
  return <SelectProvider {...props} />;
}

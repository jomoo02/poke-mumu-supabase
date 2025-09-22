import { SelectProvider, type SelectProviderProps } from './context';

export default function SelectRoot(props: SelectProviderProps) {
  // console.log(props);
  return <SelectProvider {...props} />;
}

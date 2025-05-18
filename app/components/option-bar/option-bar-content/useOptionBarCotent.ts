import { useEffect } from 'react';
import { useItem, useSelectedValue } from '../option-bar.context';

export default function useOptionBarContent() {
  const { itemRefs } = useItem();
  const { selectedValue } = useSelectedValue();

  useEffect(() => {
    if (selectedValue) {
      const ref = itemRefs.current.get(selectedValue);
      ref?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedValue, itemRefs]);
}

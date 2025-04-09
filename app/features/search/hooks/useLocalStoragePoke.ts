import { useState, useEffect } from 'react';
import type { SearchPoke } from '../types';

const KEY = 'LOCAL_POKE';

export default function useLocalStoragePoke() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [localPokeList, setLocalPokeList] = useState<SearchPoke[]>([]);

  const loadLocalPokeList = () => {
    const localPokeList = localStorage.getItem(KEY);

    return (localPokeList ? JSON.parse(localPokeList) : []) as SearchPoke[];
  };

  const addPokeToLocalPokeList = (poke: SearchPoke) => {
    const filteredLocalPokeList = loadLocalPokeList().filter(
      ({ id }) => id !== poke.id,
    );

    const updatedPokeList = [{ ...poke }, ...filteredLocalPokeList.slice(0, 5)];

    window.localStorage.setItem(KEY, JSON.stringify(updatedPokeList));
    setLocalPokeList(updatedPokeList);
  };

  useEffect(() => {
    const localPokeList = loadLocalPokeList();
    setLocalPokeList(localPokeList);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    localPokeList,
    addPokeToLocalPokeList,
  };
}

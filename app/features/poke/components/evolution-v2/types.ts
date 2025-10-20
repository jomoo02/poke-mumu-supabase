export type PokeInfoUI = {
  id: number;
  no: number;
  form: string | null;
  sprite: string;
  name: string;
  pokeKey: string;
};

export type ConditionUI = {
  key: string;
  value: string | number | boolean;
};

export type EvolutionNodeUI = PokeInfoUI & {
  details: {
    trigger: string;
    display: string;
    conditions: ConditionUI[];
  }[];
  next: EvolutionNodeUI[];
};

export type EvolutionTreeUI = {
  id: number;
  roots: EvolutionNodeUI[];
};

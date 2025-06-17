import mongoose from 'mongoose';

export interface RawPokeInfo {
  id: number;
  no: number;
  name_ko: string;
  form: string | null;
  sprite: string;
  poke_key: string;
}

export interface RawCondition {
  key: string;
  value: string | number | boolean;
}

export interface RawDetail {
  trigger: string;
  display: string;
  conditions: RawCondition[];
}

export interface RawChain {
  stage: number;
  to_poke_id: number | null;
  from_poke_id: number | null;
  to_poke: RawPokeInfo | null;
  from_poke: RawPokeInfo | null;
  to_details: RawDetail[];
}

export interface EvolutionChain {
  evolution_id: number;
  chains: RawChain[];
}

const PokeInfoSchema = new mongoose.Schema(
  {
    id: Number,
    no: Number,
    name_ko: String,
    form: String,
    sprite: String,
    poke_key: String,
  },
  { _id: false },
);

const ConditionSchema = new mongoose.Schema(
  {
    key: String,
    value: mongoose.Schema.Types.Mixed,
  },
  { _id: false },
);

const DetailSchema = new mongoose.Schema(
  {
    trigger: String,
    display: String,
    conditions: [ConditionSchema],
  },
  { _id: false },
);

const EvolutionStepSchema = new mongoose.Schema(
  {
    stage: Number,
    to_poke_id: Number,
    from_poke_id: Number,
    to_poke: PokeInfoSchema,
    from_poke: PokeInfoSchema,
    to_details: [DetailSchema],
  },
  { _id: false },
);

const EvolutionChainsSchema = new mongoose.Schema({
  evolution_id: { type: Number, unique: true, index: true, required: true },
  chains: [EvolutionStepSchema],
});

const EvolutionChainsModel =
  mongoose.models.EvolutionChains ||
  mongoose.model('EvolutionChains', EvolutionChainsSchema, 'evolution_chains');

export default EvolutionChainsModel;

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ability: {
        Row: {
          change_log: Json[] | null
          created_at: string
          description: string | null
          flavor_text: string | null
          gen: number | null
          id: number
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          poke_list: Json[] | null
        }
        Insert: {
          change_log?: Json[] | null
          created_at?: string
          description?: string | null
          flavor_text?: string | null
          gen?: number | null
          id?: number
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          poke_list?: Json[] | null
        }
        Update: {
          change_log?: Json[] | null
          created_at?: string
          description?: string | null
          flavor_text?: string | null
          gen?: number | null
          id?: number
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          poke_list?: Json[] | null
        }
        Relationships: []
      }
      evolution_chain: {
        Row: {
          created_at: string
          evolution_id: number
          from_poke_id: number | null
          id: number
          stage: number
          to_detail: Json[] | null
          to_poke_id: number
        }
        Insert: {
          created_at?: string
          evolution_id: number
          from_poke_id?: number | null
          id?: number
          stage?: number
          to_detail?: Json[] | null
          to_poke_id: number
        }
        Update: {
          created_at?: string
          evolution_id?: number
          from_poke_id?: number | null
          id?: number
          stage?: number
          to_detail?: Json[] | null
          to_poke_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "evolution_chain_from_poke_id_fkey"
            columns: ["from_poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evolution_chain_to_poke_id_fkey"
            columns: ["to_poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
        ]
      }
      "\blanguage": {
        Row: {
          id: number
          identifier: string
        }
        Insert: {
          id?: number
          identifier: string
        }
        Update: {
          id?: number
          identifier?: string
        }
        Relationships: []
      }
      move: {
        Row: {
          accuracy: number | null
          created_at: string
          damage_class_id: number | null
          effect_chance: number | null
          effect_id: number | null
          generation: number | null
          id: number
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          priority: number | null
          target_id: number | null
          type_id: number | null
        }
        Insert: {
          accuracy?: number | null
          created_at?: string
          damage_class_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          generation?: number | null
          id?: number
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          type_id?: number | null
        }
        Update: {
          accuracy?: number | null
          created_at?: string
          damage_class_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          generation?: number | null
          id?: number
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "move_damage_class_id_fkey"
            columns: ["damage_class_id"]
            isOneToOne: false
            referencedRelation: "move_damage_class"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_effect_id_fkey"
            columns: ["effect_id"]
            isOneToOne: false
            referencedRelation: "move_effect"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "move_target"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "type"
            referencedColumns: ["id"]
          },
        ]
      }
      move_changelog: {
        Row: {
          accuracy: number | null
          created_at: string
          damage_class_id: number | null
          effect_chance: number | null
          effect_id: number | null
          id: number
          move_id: number | null
          power: number | null
          pp: number | null
          priority: number | null
          target_id: number | null
          type_id: number | null
          version_group_id: number | null
        }
        Insert: {
          accuracy?: number | null
          created_at?: string
          damage_class_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          id?: number
          move_id?: number | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          type_id?: number | null
          version_group_id?: number | null
        }
        Update: {
          accuracy?: number | null
          created_at?: string
          damage_class_id?: number | null
          effect_chance?: number | null
          effect_id?: number | null
          id?: number
          move_id?: number | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          type_id?: number | null
          version_group_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "move_changelog_damage_class_id_fkey"
            columns: ["damage_class_id"]
            isOneToOne: false
            referencedRelation: "move_damage_class"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_changelog_effect_id_fkey"
            columns: ["effect_id"]
            isOneToOne: false
            referencedRelation: "move_effect"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_changelog_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_changelog_target_id_fkey"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "move_target"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_changelog_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_changelog_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_group"
            referencedColumns: ["id"]
          },
        ]
      }
      move_damage_class: {
        Row: {
          id: number
          identifier: string
        }
        Insert: {
          id?: number
          identifier: string
        }
        Update: {
          id?: number
          identifier?: string
        }
        Relationships: []
      }
      move_effect: {
        Row: {
          effect: string
          id: number
        }
        Insert: {
          effect: string
          id?: number
        }
        Update: {
          effect?: string
          id?: number
        }
        Relationships: []
      }
      move_lets_go: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_lets_go_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen1: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen1_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen2: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen2_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen3: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen3_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen4: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen4_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen5: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen5_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen6: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen6_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen7: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen7_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen8: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen8_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_list_gen9: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_list_gen9_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_machine: {
        Row: {
          created_at: string
          id: number
          machine_number: number
          machine_type: string
          move_id: number
          version_group_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          machine_number: number
          machine_type: string
          move_id: number
          version_group_id: number
        }
        Update: {
          created_at?: string
          id?: number
          machine_number?: number
          machine_type?: string
          move_id?: number
          version_group_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "move_machine_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "move_machine_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_group"
            referencedColumns: ["id"]
          },
        ]
      }
      move_sw_sh: {
        Row: {
          accuracy: number | null
          damage_class: string | null
          id: number
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          type: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class?: string | null
          id?: number
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "move_sw_sh_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
        ]
      }
      move_target: {
        Row: {
          id: number
          identifier: string
        }
        Insert: {
          id?: number
          identifier: string
        }
        Update: {
          id?: number
          identifier?: string
        }
        Relationships: []
      }
      move_with_changes: {
        Row: {
          accuracy: number | null
          damage_class_id: number | null
          damage_class_name: string | null
          effect_chance: number | null
          effect_description: string | null
          effect_id: number | null
          generation: number | null
          move_id: number | null
          name_en: string | null
          name_ja: string | null
          name_ko: string | null
          power: number | null
          pp: number | null
          priority: number | null
          target_id: number | null
          target_name: string | null
          type_id: number | null
          type_name: string | null
        }
        Insert: {
          accuracy?: number | null
          damage_class_id?: number | null
          damage_class_name?: string | null
          effect_chance?: number | null
          effect_description?: string | null
          effect_id?: number | null
          generation?: number | null
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          target_name?: string | null
          type_id?: number | null
          type_name?: string | null
        }
        Update: {
          accuracy?: number | null
          damage_class_id?: number | null
          damage_class_name?: string | null
          effect_chance?: number | null
          effect_description?: string | null
          effect_id?: number | null
          generation?: number | null
          move_id?: number | null
          name_en?: string | null
          name_ja?: string | null
          name_ko?: string | null
          power?: number | null
          pp?: number | null
          priority?: number | null
          target_id?: number | null
          target_name?: string | null
          type_id?: number | null
          type_name?: string | null
        }
        Relationships: []
      }
      poke: {
        Row: {
          created_at: string
          evolution_id: number | null
          form: string | null
          id: number
          name_en: string
          name_ja: string
          name_ko: string
          no: number
          poke_key: string
          sprite: string
          type_1: string
          type_2: string | null
        }
        Insert: {
          created_at?: string
          evolution_id?: number | null
          form?: string | null
          id?: number
          name_en: string
          name_ja: string
          name_ko: string
          no: number
          poke_key: string
          sprite: string
          type_1: string
          type_2?: string | null
        }
        Update: {
          created_at?: string
          evolution_id?: number | null
          form?: string | null
          id?: number
          name_en?: string
          name_ja?: string
          name_ko?: string
          no?: number
          poke_key?: string
          sprite?: string
          type_1?: string
          type_2?: string | null
        }
        Relationships: []
      }
      poke_ability: {
        Row: {
          ability_id: number
          created_at: string
          id: number
          poke_id: number
          slot: number
        }
        Insert: {
          ability_id: number
          created_at?: string
          id?: number
          poke_id: number
          slot: number
        }
        Update: {
          ability_id?: number
          created_at?: string
          id?: number
          poke_id?: number
          slot?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_ability_ability_id_fkey"
            columns: ["ability_id"]
            isOneToOne: false
            referencedRelation: "ability"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poke_ability_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
        ]
      }
      poke_breeding: {
        Row: {
          created_at: string
          egg_group_1: string
          egg_group_2: string | null
          gender_rate: number | null
          hatch_counter: number | null
          id: number
          poke_id: number
        }
        Insert: {
          created_at?: string
          egg_group_1: string
          egg_group_2?: string | null
          gender_rate?: number | null
          hatch_counter?: number | null
          id?: number
          poke_id: number
        }
        Update: {
          created_at?: string
          egg_group_1?: string
          egg_group_2?: string | null
          gender_rate?: number | null
          hatch_counter?: number | null
          id?: number
          poke_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_breeding_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: true
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
        ]
      }
      poke_detail: {
        Row: {
          base_friendship: number | null
          capture_rate: number | null
          created_at: string
          growth_rate: string | null
          id: number
          poke_id: number
        }
        Insert: {
          base_friendship?: number | null
          capture_rate?: number | null
          created_at?: string
          growth_rate?: string | null
          id?: number
          poke_id: number
        }
        Update: {
          base_friendship?: number | null
          capture_rate?: number | null
          created_at?: string
          growth_rate?: string | null
          id?: number
          poke_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_detail_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: true
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
        ]
      }
      poke_effort_value: {
        Row: {
          created_at: string
          id: number
          poke_id: number
          stat_name: string
          stat_value: number
        }
        Insert: {
          created_at?: string
          id?: number
          poke_id: number
          stat_name: string
          stat_value: number
        }
        Update: {
          created_at?: string
          id?: number
          poke_id?: number
          stat_name?: string
          stat_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_effort_value_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
        ]
      }
      poke_move: {
        Row: {
          created_at: string
          id: number
          moves: Json
          poke_id: number
          version_group_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          moves: Json
          poke_id: number
          version_group_id: number
        }
        Update: {
          created_at?: string
          id?: number
          moves?: Json
          poke_id?: number
          version_group_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_move_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poke_move_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_group"
            referencedColumns: ["id"]
          },
        ]
      }
      poke_moves_2: {
        Row: {
          id: number
          moves: Json
          poke_id: number
          version_group_id: number
        }
        Insert: {
          id?: number
          moves?: Json
          poke_id: number
          version_group_id: number
        }
        Update: {
          id?: number
          moves?: Json
          poke_id?: number
          version_group_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_moves_2_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poke_moves_2_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_group"
            referencedColumns: ["id"]
          },
        ]
      }
      poke_stat: {
        Row: {
          attack: number
          created_at: string
          defense: number
          hp: number
          id: number
          poke_id: number
          special_attack: number
          special_defense: number
          speed: number
        }
        Insert: {
          attack: number
          created_at?: string
          defense: number
          hp: number
          id?: number
          poke_id: number
          special_attack: number
          special_defense: number
          speed: number
        }
        Update: {
          attack?: number
          created_at?: string
          defense?: number
          hp?: number
          id?: number
          poke_id?: number
          special_attack?: number
          special_defense?: number
          speed?: number
        }
        Relationships: [
          {
            foreignKeyName: "poke_stat_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: true
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
        ]
      }
      type: {
        Row: {
          damage_class_id: number | null
          generation: number
          id: number
          identifier: string
        }
        Insert: {
          damage_class_id?: number | null
          generation: number
          id?: number
          identifier: string
        }
        Update: {
          damage_class_id?: number | null
          generation?: number
          id?: number
          identifier?: string
        }
        Relationships: []
      }
      version_group: {
        Row: {
          generation: number
          id: number
          identifier: string
          order: number
        }
        Insert: {
          generation: number
          id?: number
          identifier: string
          order: number
        }
        Update: {
          generation?: number
          id?: number
          identifier?: string
          order?: number
        }
        Relationships: []
      }
    }
    Views: {
      evolution_mview: {
        Row: {
          evolution_data: Json | null
          evolution_id: number | null
        }
        Relationships: []
      }
      poke_move_view: {
        Row: {
          moves: Json | null
          poke_id: number | null
          version_group_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "poke_move_poke_id_fkey"
            columns: ["poke_id"]
            isOneToOne: false
            referencedRelation: "poke"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poke_move_version_group_id_fkey"
            columns: ["version_group_id"]
            isOneToOne: false
            referencedRelation: "version_group"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

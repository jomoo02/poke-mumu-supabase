import type { ColumnDef } from '@/app/hooks/useTable/type';
import ArrowUpIcon from '@/app/components/icon/arrow-up';
import ArrowDownIcon from '@/app/components/icon/arrow-down';
import Checkbox from '@/app/components/ui/checkbox';
import { naturesKoMap, type Nature } from '../../data/nature';

type Stat = '공격' | '방어' | '특수공격' | '특수방어' | '스피드';

export type TNature = {
  nature: Nature;
  ko: string;
  en: string;
  increase: Stat | null;
  decrease: Stat | null;
  like: string | null;
  dislike: string | null;
};

export const natureTableColumns: ColumnDef<TNature>[] = [
  {
    id: 'selection',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowSelected() && 'indeterminate')
        }
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.isSelected} onCheckedChange={row.toggleSelect} />
    ),
  },
  {
    id: 'ko',
    header: () => <div>성격</div>,
    cell: ({ row }) => <div className="font-medium">{row.ko}</div>,
    filterable: true,
  },
  {
    id: 'en',
    header: () => <div>영칭</div>,
    cell: ({ row }) => <div>{row.en}</div>,
    filterable: true,
  },
  {
    id: 'increase',
    header: () => <div>상승</div>,
    cell: ({ row }) =>
      row.increase ? (
        <div className="text-nowrap flex items-center gap-x-1">
          {row.increase}
          <ArrowUpIcon />
        </div>
      ) : (
        <div>—</div>
      ),
  },

  {
    id: 'decrease',
    header: () => <div>하락</div>,
    cell: ({ row }) =>
      row.decrease ? (
        <div className="text-nowrap flex items-center gap-x-1">
          {row.decrease}
          <ArrowDownIcon />
        </div>
      ) : (
        <div>—</div>
      ),
  },

  {
    id: 'like',
    header: () => <div>좋아하는맛</div>,
    cell: ({ row }) => <div>{row.like ?? '아무거나 잘먹음'}</div>,
  },
  {
    id: 'dislike',
    header: () => <div>싫어하는맛</div>,
    cell: ({ row }) => <div>{row.dislike}</div>,
  },
];

export const natureTableRows: TNature[] = [
  {
    nature: 'lonely',
    ko: naturesKoMap.lonely,
    en: 'lonely',
    increase: '공격',
    decrease: '방어',
    like: '매운맛',
    dislike: '신맛',
  },
  {
    nature: 'adamant',
    ko: naturesKoMap.adamant,
    en: 'adamant',
    increase: '공격',
    decrease: '특수공격',
    like: '매운맛',
    dislike: '떫은맛',
  },
  {
    nature: 'naughty',
    ko: naturesKoMap.naughty,
    en: 'naughty',
    increase: '공격',
    decrease: '특수방어',
    like: '매운맛',
    dislike: '쓴맛',
  },
  {
    nature: 'brave',
    ko: naturesKoMap.brave,
    en: 'brave',
    increase: '공격',
    decrease: '스피드',
    like: '매운맛',
    dislike: '단맛',
  },

  {
    nature: 'bold',
    ko: naturesKoMap.bold,
    en: 'bold',
    increase: '방어',
    decrease: '공격',
    like: '신맛',
    dislike: '매운맛',
  },
  {
    nature: 'impish',
    ko: naturesKoMap.impish,
    en: 'impish',
    increase: '방어',
    decrease: '특수공격',
    like: '신맛',
    dislike: '떫은맛',
  },
  {
    nature: 'lax',
    ko: naturesKoMap.lax,
    en: 'lax',
    increase: '방어',
    decrease: '특수방어',
    like: '신맛',
    dislike: '쓴맛',
  },
  {
    nature: 'relaxed',
    ko: naturesKoMap.relaxed,
    en: 'relaxed',
    increase: '방어',
    decrease: '스피드',
    like: '신맛',
    dislike: '단맛',
  },

  {
    nature: 'modest',
    ko: naturesKoMap.modest,
    en: 'modest',
    increase: '특수공격',
    decrease: '공격',
    like: '떫은맛',
    dislike: '매운맛',
  },
  {
    nature: 'mild',
    ko: naturesKoMap.mild,
    en: 'mild',
    increase: '특수공격',
    decrease: '방어',
    like: '떫은맛',
    dislike: '신맛',
  },
  {
    nature: 'rash',
    ko: naturesKoMap.rash,
    en: 'rash',
    increase: '특수공격',
    decrease: '특수방어',
    like: '떫은맛',
    dislike: '쓴맛',
  },
  {
    nature: 'quiet',
    ko: naturesKoMap.quiet,
    en: 'quiet',
    increase: '특수공격',
    decrease: '스피드',
    like: '떫은맛',
    dislike: '단맛',
  },

  {
    nature: 'calm',
    ko: naturesKoMap.calm,
    en: 'calm',
    increase: '특수방어',
    decrease: '공격',
    like: '쓴맛',
    dislike: '매운맛',
  },
  {
    nature: 'gentle',
    ko: naturesKoMap.gentle,
    en: 'gentle',
    increase: '특수방어',
    decrease: '방어',
    like: '쓴맛',
    dislike: '신맛',
  },
  {
    nature: 'careful',
    ko: naturesKoMap.careful,
    en: 'careful',
    increase: '특수방어',
    decrease: '특수공격',
    like: '쓴맛',
    dislike: '떫은맛',
  },
  {
    nature: 'sassy',
    ko: naturesKoMap.sassy,
    en: 'sassy',
    increase: '특수방어',
    decrease: '스피드',
    like: '쓴맛',
    dislike: '단맛',
  },

  {
    nature: 'timid',
    ko: naturesKoMap.timid,
    en: 'timid',
    increase: '스피드',
    decrease: '공격',
    like: '단맛	',
    dislike: '매운맛',
  },
  {
    nature: 'hasty',
    ko: naturesKoMap.hasty,
    en: 'hasty',
    increase: '스피드',
    decrease: '방어',
    like: '단맛	',
    dislike: '신맛',
  },
  {
    nature: 'jolly',
    ko: naturesKoMap.jolly,
    en: 'jolly',
    increase: '스피드',
    decrease: '특수공격',
    like: '단맛	',
    dislike: '떫은맛',
  },
  {
    nature: 'naive',
    ko: naturesKoMap.naive,
    en: 'naive',
    increase: '스피드',
    decrease: '특수방어',
    like: '단맛	',
    dislike: '쓴맛',
  },

  {
    nature: 'hardy',
    ko: naturesKoMap.hardy,
    en: 'hardy',
    increase: null,
    decrease: null,
    like: null,
    dislike: null,
  },
  {
    nature: 'docile',
    ko: naturesKoMap.docile,
    en: 'docile',
    increase: null,
    decrease: null,
    like: null,
    dislike: null,
  },
  {
    nature: 'bashful',
    ko: naturesKoMap.bashful,
    en: 'bashful',
    increase: null,
    decrease: null,
    like: null,
    dislike: null,
  },
  {
    nature: 'quirky',
    ko: naturesKoMap.quirky,
    en: 'quirky',
    increase: null,
    decrease: null,
    like: null,
    dislike: null,
  },
  {
    nature: 'serious',
    ko: naturesKoMap.serious,
    en: 'serious',
    increase: null,
    decrease: null,
    like: null,
    dislike: null,
  },
];

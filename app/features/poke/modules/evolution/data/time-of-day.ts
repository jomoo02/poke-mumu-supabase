export type TimeOfDay = 'night' | 'day' | 'dusk' | 'full-moon';

export const TIME_OF_DAY_KO: Record<TimeOfDay, string> = {
  night: '밤',
  day: '낮',
  dusk: '황혼',
  'full-moon': '보름달',
};

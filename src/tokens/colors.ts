export const COLORS = {
  obsidianNoir: '#050505',
  graphiteStudio: '#121212',
  luxuryGold: '#D9A441',
  warmIvory: '#F7F5F2',
  accentWhite: '#FFFFFF',
  platinumMist: '#6B7280',
} as const;

export type BrandColor = typeof COLORS[keyof typeof COLORS];
export default COLORS;

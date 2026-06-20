export const SHADOWS = {
  sm: '0 2px 8px rgba(0,0,0,0.4)',
  md: '0 8px 24px rgba(0,0,0,0.5)',
  lg: '0 20px 48px rgba(0,0,0,0.65)',
  gold: '0 12px 32px rgba(217,164,65,0.12)',
} as const;

export type BrandShadow = typeof SHADOWS[keyof typeof SHADOWS];
export default SHADOWS;

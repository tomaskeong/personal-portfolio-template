const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const mediaQueries = {
  sm: { query: `(max-width: ${breakpoints.sm}px)` },
  md: { query: `(max-width: ${breakpoints.md}px)` },
  lg: { query: `(max-width: ${breakpoints.lg}px)` },
  xl: { query: `(max-width: ${breakpoints.xl}px)` },
  xxl: { query: `(max-width: ${breakpoints.xxl})px)` },
};

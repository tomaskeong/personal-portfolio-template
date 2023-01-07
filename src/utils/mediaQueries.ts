const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1050,
  xl: 1200,
  xxl: 1536,
};

export const mediaQueries = {
  sm: { query: `(max-width: ${breakpoints.sm}px)` },
  md: `(max-width: ${breakpoints.md}px)`,
  lg: { query: `(max-width: ${breakpoints.lg}px)` },
  xl: { query: `(max-width: ${breakpoints.xl}px)` },
  xxl: { query: `(max-width: ${breakpoints.xxl}px)` },
};

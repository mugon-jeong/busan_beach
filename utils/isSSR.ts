/**
 * false = client
 * true  = server
 */
export const isSSR = typeof window === 'undefined';

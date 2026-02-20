/**
 * App configuration. Values can be overridden via environment variables.
 * For Vite, use VITE_ prefix and set in .env or .env.local
 */
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000',
  teamId: import.meta.env.VITE_TEAM_ID ?? '1',
  nextOpponentTeamId: import.meta.env.VITE_NEXT_OPPONENT_TEAM_ID ?? '2',
  apiKey: import.meta.env.VITE_API_KEY ?? 'testytest',
}

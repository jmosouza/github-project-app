export const getAuthenticated = state => (
  state.auth.credentials.username !== null &&
  state.auth.credentials.password !== null
);

export const getCredentials = state => state.auth.credentials;

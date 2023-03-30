export const selectIsLoggedIn = state => state.logIn.isLoggedIn;
export const selectAccessToken = state => state.logIn.token;
export const selectUserName = state => state.logIn.user;
export const selectIsRefreshing = state => state.logIn.isRefreshing;

// export const authSelectors = {
//   selectIsLoggedIn,
//   selectUserName,
// };

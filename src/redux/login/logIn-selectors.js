export const selectIsLoggedIn = state => state.logIn.isLoggedIn;
export const selectUserName = state => state.logIn.user.name;
export const selectIsRefreshing = state => state.logIn.isRefreshing;

// export const authSelectors = {
//   selectIsLoggedIn,
//   selectUserName,
// };

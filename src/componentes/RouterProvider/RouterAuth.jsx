import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: ({ auth: { user } }) => !!user,
  authenticatingSelector: ({ auth: { auth } }) => auth,
});

export default userIsAuthenticated;

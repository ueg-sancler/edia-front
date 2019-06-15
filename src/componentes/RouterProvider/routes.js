import Login, { ROUTE as LOGIN_ROUTE } from './../screens/Login'
import User, { ROUTE as USER_ROUTE } from './../screens/User'
import SignUp, { ROUTE as SIGNUP_ROUTE } from './../screens/SignUp'

export default [
  {
    path: LOGIN_ROUTE,
    exact: true,
    private: false,
    component: Login,
  },
  {
    path: USER_ROUTE,
    exact: true,
    private: true,
    component: User
  },
  {
    path: SIGNUP_ROUTE,
    exact: true,
    private: false,
    component: SignUp,
  }
];
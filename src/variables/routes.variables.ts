export const routes = {
  login: "/login",
  userDetails: "/user",
  register: "/register",
};

export const defaultAuthenticatedUserRoute = routes.userDetails;
export const defaultUnauthenticatedUserRoute = routes.login;

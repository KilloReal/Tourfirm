import { useSetRecoilState } from "recoil";

import { history, useFetchWrapper } from "../helpers";
import { authAtom, usersAtom } from "../state";

export { useUserActions };

function useUserActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}`;
  const fetchWrapper = useFetchWrapper();
  const setAuth = useSetRecoilState(authAtom);
  const setUsers = useSetRecoilState(usersAtom);

  return {
    register,
    login,
    logout,
    getAll,
  };

  function register(username, password) {
    return fetchWrapper
      .post(`${baseUrl}/api/auth/register`, { username, password })
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);

        history.push("/");
      });
  }

  function login(username, password) {
    return fetchWrapper
      .post(`${baseUrl}/api/auth/login`, { username, password })
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);

        history.push("/");
      });
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    history.push("/login");
  }

  function getAll() {
    return fetchWrapper.get(baseUrl).then(setUsers);
  }
}

import { createContext, useContext, useState } from "react";
import jwtDecode from "jwt-decode";

const loginContext = createContext({
  authorization: {
    jwt: null,
    role: null,
    name: null,
    surname: null,
    username: null,
  },
  newUserLogin: null,
  logInAcc: () => {},
  logOutAcc: () => {},
});

export default loginContext;

const MY_AUTH_APP = "MY_AUTH_APP";

export function LoginContextProvider({ children }, newUserLogin) {
  const [authorization, setAuthorization] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
      name: null,
      surname: null,
    }
  );

  async function logInAcc(newUserLogin) {
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserLogin),
    });
    if (response.status === 200) {
      const token = await response.json();
      setAuthorization(jwtDecode(token.jwt));
      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify(jwtDecode(token.jwt))
      );
    } else {
      alert("Email o password incorrectos");
    }
  }

  function logOutAcc() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      jwt: null,
      role: null,
    });
  }

  const value = {
    newUserLogin,
    logInAcc,
    authorization,
    logOutAcc,
  };

  return (
    <loginContext.Provider value={value}>{children}</loginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(loginContext);
}

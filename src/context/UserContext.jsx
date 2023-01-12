import { useNavigation } from "react-router-dom";
import { createContext, useState } from "react";

const UserContext = createContext();
UserContext.displayName = "user";
export default UserContext;

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(false);

  const loginUser = (e) => {
    setUser(true);
  };

  const logOut = (e) => {
    setUser(false);
  };

  let valueOBJ = {
    user: user,
    setUser: setUser,
    loginUser: loginUser,
    logOut: logOut,
  };

  return (
    <UserContext.Provider value={valueOBJ}>
      {props.children}
    </UserContext.Provider>
  );
};

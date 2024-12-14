import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo_] = useState(null);

  const setUserInfo = (newUserInfo) => {
    setUserInfo_(newUserInfo);
  };

  const contextValue = useMemo(
    () => ({
        userInfo,
        setUserInfo,
    }),
    [userInfo]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserInfo = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
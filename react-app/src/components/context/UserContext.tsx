import React, { createContext, useContext, useEffect, useState } from "react";

import { Profile } from "./IProfile";
import { UserContextType } from "./IUserContextType";
import { UserProviderProps } from "./IUserProviderProps";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const storedProfiles = localStorage.getItem("profiles");
    return storedProfiles ? JSON.parse(storedProfiles) : [];
  });

  const [loggedInUser, setLoggedInUser] = useState<string | null>(() => {
    const currentProfile = profiles.find((profile) => profile.isLogined);
    return currentProfile ? currentProfile.name : null;
  });

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const handleLogin = (userName: string) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = prevProfiles.map((profile) =>
        profile.name === userName ? { ...profile, isLogined: true } : profile
      );

      if (!updatedProfiles.find((profile) => profile.name === userName)) {
        updatedProfiles.push({ name: userName, isLogined: true });
      }

      return updatedProfiles;
    });

    setLoggedInUser(userName);
  };

  const handleLogout = () => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.name === loggedInUser
          ? { ...profile, isLogined: false }
          : profile
      )
    );
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error: useUserContext must be used within a UserProvider");
  }
  return context;
};

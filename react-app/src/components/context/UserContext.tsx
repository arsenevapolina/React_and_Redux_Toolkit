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

  const [loggedInUser, setLoggedInUser] = useState<string>(() => {
    const currentProfile = profiles.find((profile) => profile.isLogined);
    return currentProfile ? currentProfile.name : "";
  });

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const handleLogin = (userName: string) => {
    setProfiles((prevProfiles) => {
      const existingProfile = prevProfiles.find(
        (profile) => profile.name === userName
      );
      if (existingProfile) {
        return prevProfiles.map((profile) =>
          profile.name === userName ? { ...profile, isLogined: true } : profile
        );
      } else {
        const newProfile: Profile = { name: userName, isLogined: true };
        return [...prevProfiles, newProfile];
      }
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
    setLoggedInUser("");
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

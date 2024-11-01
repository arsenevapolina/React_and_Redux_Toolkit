import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(() => {
    const storedProfiles = localStorage.getItem("profiles");
    return storedProfiles ? JSON.parse(storedProfiles) : [];
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const currentProfile = profiles.find((profile) => profile.isLogined);
    return currentProfile ? currentProfile.name : "";
  });

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const handleLogin = (userName) => {
    setProfiles((prevProfiles) => {
      const existingProfile = prevProfiles.find(
        (profile) => profile.name === userName
      );
      if (existingProfile) {
        return prevProfiles.map((profile) =>
          profile.name === userName ? { ...profile, isLogined: true } : profile
        );
      } else {
        const newProfile = { name: userName, isLogined: true };
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

export const useUserContext = () => useContext(UserContext);

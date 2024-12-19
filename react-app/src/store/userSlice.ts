import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "./IProfile";

interface UserState {
  profiles: Profile[];
  loggedInUser: string | null;
}

const initialState: UserState = {
  profiles: [],
  loggedInUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfiles(state, action: PayloadAction<Profile[]>) {
      state.profiles = action.payload;
      const currentProfile = state.profiles.find(
        (profile) => profile.isLogined
      );
      state.loggedInUser = currentProfile ? currentProfile.name : null;
    },
    loginUser(state, action: PayloadAction<string>) {
      const userName = action.payload;
      const profileIndex = state.profiles.findIndex(
        (profile) => profile.name === userName
      );

      if (profileIndex > -1) {
        state.profiles[profileIndex].isLogined = true;
      } else {
        state.profiles.push({ name: userName, isLogined: true });
      }

      state.loggedInUser = userName;
    },
    logoutUser(state) {
      const profileIndex = state.profiles.findIndex(
        (profile) => profile.name === state.loggedInUser
      );
      if (profileIndex > -1) {
        state.profiles[profileIndex].isLogined = false;
      }
      state.loggedInUser = null;
    },
  },
});

export const { setProfiles, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

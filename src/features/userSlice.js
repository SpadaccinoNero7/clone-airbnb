import { createSlice } from "@reduxjs/toolkit";

const initialUsers = {
  users: [
    {
      id: 1,
      name: "Giacomo",
      surname: "Rossi",
      age: 32,
      job: "Idraulico",
      email: "giacomo.rossi@example.com",
      password: "123campo456",
      starredPlaces: [
        {
          id: 1,
        },
        {
          id: 5,
        },
      ],
    },
    {
      id: 2,
      name: "Maria",
      surname: "Bianchi",
      age: 27,
      job: "Impiegata comunale",
      email: "mariabianchi77@example.com",
      password: "tram789polino",
      starredPlaces: [
        {
          id: 3,
        },
        {
          id: 7,
        },
      ],
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    getUserEmail: (state, action) => {
      state.users = state.users.filter((el) => el.email === action.payload);
    },
    getUserPassword: (state, action) => {
      state.users = state.users.filter((el) => el.password === action.payload);
    },
  },
});

export const { getUserEmail, getUserPassword } = userSlice.actions;

export default userSlice.reducer;

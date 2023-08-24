import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = "https://aeroplane-find.onrender.com";
// const baseUrl = 'http://localhost:4000';

export const postReservation = createAsyncThunk(
  "aeroplane/reservations",
  async (reserve) => {
    try {
      // const authToken = localStorage.getItem("authToken");
      const authToken =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlNzdiMjM3Yi1hNWZjLTRlYjMtODdjOC04Y2U0Njg4MmFmNzEiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjkyODY1MjA3LCJleHAiOjE2OTI4NjcwMDd9.K_uaPJazLclkjgOy1b6fkz6Hc--9wrahFcybbNCUVLc";
      const response = await fetch(
        `${baseUrl}/aeroplanes/${reserve.id}/reservations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
          body: JSON.stringify({
            user_id: reserve.id,
            city: reserve.city,
            reservation_date: reserve.reservationDate,
            returning_date: reserve.returningDate,
            aeroplanes_id: reserve.aeroplanesId, // Corrected typo here
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post reservation");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Rethrow the error for further handling in Redux
    }
  }
);

export const getReservations = createAsyncThunk(
  "aeroplanes/reservations",
  async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const user = JSON.parse(localStorage.getItem("user"));
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      };

      const resp = await fetch(
        `${baseUrl}/users/${user.id}/reservations`,
        requestOptions
      );

      if (!resp.ok) {
        throw new Error("Failed to get reservations");
      }

      const data = await resp.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const cancelReservations = createAsyncThunk(
  "reservations/cancel",
  async (id) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const user = JSON.parse(localStorage.getItem("user"));
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      };

      const resp = await fetch(
        `${baseUrl}/users/${user.id}/reservations/${id}`,
        requestOptions
      );

      if (!resp.ok) {
        throw new Error("Failed to cancel reservation");
      }

      const data = await resp.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {}, // Add any other reducers you might need
  extraReducers: (builder) => {
    builder.addCase(postReservation.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postReservation.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      reservations: payload,
    }));
    builder.addCase(postReservation.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
    builder.addCase(getReservations.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getReservations.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      reservations: payload,
    }));
    builder.addCase(getReservations.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
    builder.addCase(cancelReservations.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(cancelReservations.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      reservations: payload,
    }));
    builder.addCase(cancelReservations.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
  },
});

export default reservationSlice.reducer;

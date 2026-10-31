import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCount } from "../service/api";

export const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  FAILED: "failed",
};

const initialState = {
  value: 0,
  status: STATUS.IDLE, // Desocupado
};

// Async Action
export const incrementAsync = createAsyncThunk(
  "counter/setCount",
  async (payload) => {
    return await setCount(payload);
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (oldState) => {
      // Redux Toolkit incluye la librería Immer
      // Immer toma código mutable
      oldState.value += 1;

      // Immer lo transforma en código inmutable
      // const newState = {
      //     ...oldState,
      //     value: oldState.value + 1
      // }
    },
    decrement: (oldState, action) => {
      // Immer toma código mutable
      oldState.value -= action.payload;

      // Immer lo transforma en código inmutable
      // const newState = {
      //     ...oldState,
      //     value: oldState.value - action.payload
      // }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (oldState) => {
        oldState.status = STATUS.LOADING;
      })
      .addCase(incrementAsync.fulfilled, (oldState, action) => {
        oldState.status = STATUS.IDLE; // Indicamos que ya se desocupo la tarea
        oldState.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (oldState) => {
        oldState.status = STATUS.FAILED;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

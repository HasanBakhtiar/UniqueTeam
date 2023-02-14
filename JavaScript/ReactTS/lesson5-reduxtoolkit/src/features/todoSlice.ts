import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
interface Todo {
  id: string;
  title: string;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo = { id: v4(), title: action.payload };
      state.push(newTodo);
    },
    remove: () => {},
  },
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;

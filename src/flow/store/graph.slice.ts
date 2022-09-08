import { Graph } from "@antv/x6";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface State {
  graph: Graph | null;
}

const initialState: State = {
  graph: null,
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setGraph(state, action) {
      state.graph = action.payload;
    },
  },
});

const { setGraph } = graphSlice.actions;

export const selectGraph = (state: RootState) => state.graph.graph;
/* 
export const login = (from: AuthForm) => (dispatch: AppDispatch) =>
  auth.login(from).then((user) => dispatch(setUser(user)));
export const register = (from: AuthForm) => (dispatch: AppDispatch) =>
  auth.register(from).then((user) => dispatch(setUser(user)));
export const logout = () => (dispatch: AppDispatch) =>
  auth.logout().then((user) => dispatch(setUser(null)));
export const bootstrap = () => (dispatch: AppDispatch) =>
  bootstrapUser().then((user) => dispatch(setUser(user))); */

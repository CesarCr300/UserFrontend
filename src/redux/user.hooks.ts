import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useUserDispatch: () => AppDispatch = useDispatch;
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;

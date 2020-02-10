import { useContext } from "react";
import { AppContext, actions } from "../contexts/AppContext";

export const useAppState = () => [...useContext(AppContext), actions];

export default useAppState;

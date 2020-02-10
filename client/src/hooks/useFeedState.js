import { useContext } from "react";
import { FeedContext, actions } from "../contexts/FeedContext";

export const useFeedState = () => [...useContext(FeedContext), actions];

export default useFeedState;

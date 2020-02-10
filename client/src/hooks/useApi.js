import { useReducer, useCallback } from "react";

const types = {
  FETCHING: `FETCHING`,
  SUCCESS: `SUCCESS`,
  ERROR: `ERROR`
};

const FETCHING = `FETCHING`;
const SUCCESS = `SUCCESS`;
const ERROR = `ERROR`;

const initialState = {
  status: null,
  response: null
};

const fetching = () => ({ type: FETCHING });
const success = response => ({ type: SUCCESS, response });
const error = response => ({ type: ERROR, response });

const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case types.FETCHING:
      return { ...initialState, status: types.FETCHING };
    case types.SUCCESS:
      return { ...state, status: types.SUCCESS, response };
    case types.ERROR:
      return { ...state, status: types.ERROR, response };
    default:
      return state;
  }
};

const useApi = request => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRequest = useCallback(
    async (input) => {
      dispatch(fetching());
      try {
        const response = await request(input);
        dispatch(success(response));
        return response;
      } catch (e) {
        console.log('Use Api Error')
        console.log(e);
        dispatch(error(e));
      }
    },
    [request]
  );

  return [state, types, handleRequest];
};

export default useApi;

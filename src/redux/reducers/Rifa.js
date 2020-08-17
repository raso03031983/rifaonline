const defaultState = {
  ListRifa: {},
  ListNumRifa: {},
  rifa: {},
  default: {},
  nwstate: "",
  error: null,
  formError: {
    hasError: false,
    fields: {},
  },
  formOptions: {
    perfis: [],
  },
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_SAVE_RIFA": {
      return {
        ...state,
        ListRifa: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_SAVE_RIFA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        rifa: action.payload,
      };
    }

    case "FETCH_SAVE_RIFA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_RIFA_UPDATE": {
      return {
        ...state,
        rifa: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_RIFA_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        rifa: action.payload,
      };
    }

    case "FETCH_RIFA_UPDATE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_LISTA_RIFA": {
      return {
        ...state,
        ListRifa: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_LISTA_RIFA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListRifa: action.payload,
      };
    }

    case "FETCH_LISTA_RIFA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH__RIFA": {
      return {
        ...state,
        rifa: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_RIFA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        rifa: action.payload,
      };
    }

    case "FETCH_RIFA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_NUM_RIFA": {
      return {
        ...state,
        ListNumRifa: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_NUM_RIFA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListNumRifa: action.payload,
      };
    }

    case "FETCH_NUM_RIFA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "RESET": {
      return {
        ...state,
        default: {},
      };
    }

    case "RIFA_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "RIFA_ERRORS_RESET": {
      return {
        ...state,
        nwstate: "ERRORS_RESET",
        formError: defaultState.formError,
      };
    }

    default: {
      return state;
    }
  }
}

const defaultState = {
  endereco: {},
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
    case "FETCH_CEP": {
      return {
        ...state,
        endereco: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CEP_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        endereco: action.payload,
      };
    }

    case "FETCH_CEP_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_DONE": {
      return {
        ...state,
        nwstate: "DONE",
      };
    }

    case "RESET": {
      return {
        ...state,
        endereco: {},
      };
    }

    case "CEP_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "CEP_ERRORS_RESET": {
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

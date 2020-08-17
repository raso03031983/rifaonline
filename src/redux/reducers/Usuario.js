const defaultState = {
  ListUsuario: [],
  usuario: {},
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
    case "FETCH_USUARIO": {
      return {
        ...state,
        usuario: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_USUARIO_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        usuario: action.payload,
      };
    }

    case "FETCH_USUARIO_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_USUARIO_SAVE": {
      return {
        ...state,
        usuario: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_USUARIO_SAVE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        usuario: action.payload,
      };
    }

    case "FETCH_USUARIO_SAVE_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_USUARIO_UPDATE": {
      return {
        ...state,
        usuario: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_USUARIO_UPDATE_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        usuario: action.payload,
      };
    }

    case "FETCH_USUARIO_UPDATE_REJECTED": {
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
        nwstate: "RESET",
        usuario: {},
      };
    }

    case "USUARIO_ERRORS_FULFILLED": {
      return {
        ...state,
        nwstate: "ERRORS_FULFILLED",
        formError: action.payload,
      };
    }

    case "USUARIO_ERRORS_RESET": {
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

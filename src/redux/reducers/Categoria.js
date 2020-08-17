const defaultState = {
  ListCategoria: [],
  categoria: {},
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
    case "FETCH_Categoria_RIFA": {
      return {
        ...state,
        ListRifa: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_SAVE_CATEGORIA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        categoria: action.payload,
      };
    }

    case "FETCH_SAVE_CATEGORIA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH_LISTA_CATEGORIA": {
      return {
        ...state,
        ListCategoria: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_LISTA_CATEGORIA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        ListCategoria: action.payload,
      };
    }

    case "FETCH_LISTA_CATEGORIA_REJECTED": {
      return {
        ...state,
        nwstate: "REJECTED",
        error: action.payload,
      };
    }

    case "FETCH__CATEGORIA": {
      return {
        ...state,
        categoria: action.payload,
        nwstate: "FETCHING",
      };
    }

    case "FETCH_CATEGORIA_FULFILLED": {
      return {
        ...state,
        nwstate: "FETCHED",
        categoria: action.payload,
      };
    }

    case "FETCH_CATEGORIA_REJECTED": {
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

export default (state: any, action: any) => {
  switch(action.type){
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload
      } ;
      case 'CLOSE_MODAL':
        return {
          ...state,
          modalState: action.payload
        };
        case 'CLOSE_MODAL_1':
          return {
            ...state,
            modalState1: action.payload
          };
          case 'CLOSE_MODAL_2':
          return {
            ...state,
            modalState2: action.payload
          };
          case 'CLOSE_MODAL_3':
          return {
            ...state,
            modalState3: action.payload
          };
          case 'SET_USER':
          return {
            ...state,
            user: action.payload
          }; case 'SET_LOGGED_IN':
          return {
            ...state,
            isLoggedIn: action.payload
          };
          case 'SIGNIN_MODAL_STATE':
            return {
              ...state,
              signInModalState: action.payload
            };
            case 'SIGNUP_MODAL_STATE':
            return {
              ...state,
              signUpModalState: action.payload
            };
            case 'UPDATE_PROFILE_MODAL_STATE':
            return {
              ...state,
              updateProfileModalState: action.payload
            }
    default:
          return state;
  }
}
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
          }
    default:
          return state;
  }
}
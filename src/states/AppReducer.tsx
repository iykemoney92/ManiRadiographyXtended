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
          }
    default:
          return state;
  }
}
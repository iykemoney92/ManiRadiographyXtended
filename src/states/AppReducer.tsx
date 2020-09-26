export default (state: any, action: any) => {
  switch(action.type){
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload
      } ;
    default:
          return state;
  }
}
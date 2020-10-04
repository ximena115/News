const defaultState = {
   search: [],
   date:[],
   category:[]
}

const Reducer = (  state = defaultState, actions) => {
    switch(actions.type){
      case "SEARCH":
           state.search = actions.search
           break;
      case "DATE":
           state.date = actions.date     
           break;
      case "CATEGORY":
           state.category =actions.category  
           break;   
        default:
           break;
    }
   return state;
};

export default Reducer;
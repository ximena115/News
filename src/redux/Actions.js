export const SEARCH = "SEARCH";
export const DATE = "DATE";
export const CATEGORY = "CATEGORY";



export const fetchLatest = (date) => {
    return (dispatch) => {
      fetch(`https://api.canillitaapp.com/latest/${date}`)
        .then((response) => response.json())
        .then((response) => {
          dispatch(date(response, date));
        });
    };
  };

  export const fetchCategory = (category) => {
    return (dispatch) => {
      fetch(`https://api.canillitaapp.com/news/${category}`)
        .then((response) => response.json())
        .then((response) => {
          dispatch(category(response, category));
        });
    };
  };

  export const fetchSearch = (text) => {
    return (dispatch) => {
      fetch(`https://api.canillitaapp.com/${text}`)
        .then((response) => response.json())
        .then((response) => {
          dispatch(search(response, text));
        });
    };
  };

  export const  search = (response, text) => ({
    type: SEARCH,
    text,
    response
  });

  export const  date = (response, date) => ({
    type: DATE,
    date,
    response
  });

  export const  category = (response, category) => ({
    type: CATEGORY,
    category,
    response
  });



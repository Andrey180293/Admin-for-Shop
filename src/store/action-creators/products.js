export const SET_PRODUCTS = "SET_PRODUCTS";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_NAME = "UPDATE_NAME";
export const SET_ISLOADING = "SET_ISLOADING";

export const SET_OPEN_SNACKBAR = "SET_OPEN_SNACKBAR";

export const SET_SNACKBAR_MESSAGE = "SET_SNACKBAR_MESSAGE";

const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const updatePrice = (payload) => ({ type: UPDATE_PRICE, payload });
export const updateName = (payload) => ({ type: UPDATE_NAME, payload });
export const setIsLoading = (payload) => ({ type: SET_ISLOADING, payload });

export const setOpenSnackBar = (payload) => ({
  type: SET_OPEN_SNACKBAR,
  payload,
});
const setSnackBarMessage = (payload) => ({
  type: SET_SNACKBAR_MESSAGE,
  payload,
});

//------------------------------------------------------------------------

export const getProducts = (submenu, link) => {
  return async (dispatch) => {
    dispatch(setIsLoading(false));
    let response = await fetch(
      `https://radiant-ravine-14822.herokuapp.com/api/${submenu}/${link}`,
      {
        //  params:'link',
      }
    );
    let data = await response.json();
    dispatch(setProducts(data.data ? data.data : data));
    dispatch(setIsLoading(true));
    return data;
  };
};

//------------------------------------------------------------------------

export const setUpdateData = (submenu, item, method, link) => {
  return async (dispatch) => {
    let response = await fetch(
      `https://radiant-ravine-14822.herokuapp.com/api/${submenu}/${link}`,
      {
        method: method,
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    dispatch(setSnackBarMessage(data.message ? data.message : data));
    dispatch(setOpenSnackBar(true));

    dispatch(getProducts(submenu, link));
  };
};

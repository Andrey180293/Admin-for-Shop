import { db } from "../../servises/firebase";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_NAME = "UPDATE_NAME";
export const GET_PROD = "GET_PROD";
export const SET_ID = "SET_ID";

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const updatePrice = (payload) => ({ type: UPDATE_PRICE, payload });
export const updateName = (payload) => ({ type: UPDATE_NAME, payload });

export const getProd = (payload) => ({ type: GET_PROD, payload });

//-----------------------------------------------------------

export const getProducts = (link) => {
  const items = [];
  return async (dispatch) => {
    await db
      .collection(link)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch(setProducts([...items]));
      });
    return [...items];
  };
};

//-----------------------------------------------------------

export const setUpdateData = (item) => {
  console.log(item);
  let setStore = db.collection(`${item.category}`).doc(`${item.id}`);
  setStore
    .set(item)
    .then(() => {
      alert("Товар успішно додано!");
    })
    .catch((error) => {
      alert("Error : ", error);
    });
};

//-----------------------------------------------------------

export const deleteDataItem = (item) => {
  return async (dispatch) => {
    let setStore = db.collection(`${item.category}`).doc(`${item.id}`).delete();
    await setStore
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        alert("Error removing document: ", error);
      });
    dispatch(getProducts(`${item.category}`));
  };
};
const setId = (payload) => ({ type: SET_ID, payload });
//-----------------------------------------------------------
export const newId = (category) => {
  return async (dispatch) => {
    const products = await dispatch(getProducts(category));

    const arrId = products.map((el) => +`${el.id}`.substr(1));
    let maxId = products.length === 0 ? 0 : Math.max(...arrId) + 1;
    if (category === "motorcycles") dispatch(setId("1" + maxId));
    if (category === "phones") dispatch(setId("2" + maxId));
    if (category === "qudrocopters") dispatch(setId("3" + maxId));

    if (category === "robots") dispatch(setId("4" + maxId));
  };
};

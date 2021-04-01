import { db } from "../../servises/firebase";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_NAME = "UPDATE_NAME";

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const updatePrice = (payload) => ({ type: UPDATE_PRICE, payload });
export const updateName = (payload) => ({ type: UPDATE_NAME, payload });

export const getProducts = (link) => {
  return async (dispatch) => {
    await db
      .collection(link)
      .get()
      .then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch(setProducts([...items]));
      });
  };
};

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

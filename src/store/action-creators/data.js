import { db } from "../../servises/firebase";

export const GET_DATA = "GET_DATA";
export const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";

export const SET_ABOUT = "SET_ABOUT";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_NAME = "SET_NAME";
export const SET_PRICE = "SET_PRICE";
export const SET_AMOUNT = "SET_AMOUNT";
export const SET_IMAGES = "SET_IMAGES";
export const SET_PROPERTIES = "SET_PROPERTIES";

export const setAbout = (payload) => ({ type: SET_ABOUT, payload });
export const setCategory = (payload) => ({ type: SET_CATEGORY, payload });
export const setName = (payload) => ({ type: SET_NAME, payload });
export const setPrice = (payload) => ({ type: SET_PRICE, payload });
export const setAmount = (payload) => ({ type: SET_AMOUNT, payload });

export const setImages = (payload) => ({ type: SET_IMAGES, payload });
export const setProperties = (payload) => ({ type: SET_PROPERTIES, payload });

// export const getData = () => {
//   return async (dispatch) => {
//     await db
//       .collection("store")
//       .get()
//       .then((querySnapshot) => {
//         let items = [];
//         querySnapshot.forEach((doc) => {
//           items.push(doc.data());
//         });
//         dispatch({ type: GET_DATA, payload: [...items] });
//       });
//   };
// };

// export const setActiveItem = (payload) => ({ type: SET_ACTIVE_ITEM, payload });

export const setData = (data) => {
  let setStore = db.collection(`${data.category}s`).doc(data.name);
  setStore
    .set(data)
    .then(() => {
      alert("Товар успішно додано!");
    })
    .catch((error) => {
      console.error("Error : ", error);
    });
};

// export const deleteDataItem = (item) => {
//   return async (dispatch) => {
//     console.log(`${item}`);
//     let setStore = db.collection("store").doc(`${item}`).delete();
//     await setStore
//       .then(() => {
//         console.log("Document successfully deleted!");
//       })
//       .catch((error) => {
//         console.error("Error removing document: ", error);
//       });
//     dispatch(getData());
//   };
// };

// export const setCompleteItem = (checked, item, el) => {
//   return async (dispatch) => {
//     console.log([...item.arr]);
//     let updateStore = db
//       .collection("store")
//       .doc(`${item.name}`)
//       .update({
//         ...item,
//         arr: [
//           ...item.arr.map((f) =>
//             f.id === el.id ? { ...el, complete: checked } : f
//           ),
//         ],
//       });
//     await updateStore
//       .then(() => {
//         console.log("Document successfully updating!");
//       })
//       .catch((error) => {
//         console.error("Error removing document: ", error);
//       });
//     dispatch(getData());
//   };
// };

// export const setTextFieldItem = (item, el) => {
//   return async (dispatch) => {
//     //console.log([...item.arr]);
//     let updateStore = db
//       .collection("store")
//       .doc(`${item.name}`)
//       .update({
//         ...item,
//         arr: [...item.arr, el],
//       });
//     await updateStore
//       .then(() => {
//         console.log("Document successfully updating!");
//       })
//       .catch((error) => {
//         console.error("Error removing document: ", error);
//       });
//     dispatch(getData());
//   };
// };

// export const removeTextFieldItem = (item, el) => {
//   return async (dispatch) => {
//     //console.log([...item.arr]);
//     let updateStore = db
//       .collection("store")
//       .doc(`${item.name}`)
//       .update({
//         ...item,
//         arr: [...item.arr.filter((f) => f.id !== el.id)],
//       });
//     await updateStore
//       .then(() => {
//         console.log("Document successfully updating!");
//       })
//       .catch((error) => {
//         console.error("Error removing document: ", error);
//       });
//     dispatch(getData());
//   };
// };

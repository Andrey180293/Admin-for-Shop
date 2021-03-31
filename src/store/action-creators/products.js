import { db } from "../../servises/firebase";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });

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

export const updatePrice = (payload) => ({ type: UPDATE_PRICE, payload });

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
// export const setActiveItem = (payload) => ({ type: SET_ACTIVE_ITEM, payload });

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

/*

export const SET_MOTORCYCLES = "SET_MOTORCYCLES";
export const SET_ROBOTS = "SET_ROBOTS";
export const SET_QUDROCOPTERS = "SET_QUDROCOPTERS";

export const setMorcycles = (payload) => ({ type: SET_MOTORCYCLES, payload });

export const setRobots = (payload) => ({ type: SET_ROBOTS, payload });
export const setQuadrocopters = (payload) => ({ type: SET_QUDROCOPTERS, payload });

 export const getMorcycles = () => {
   return async (dispatch) => {
     await db
       .collection("motorcycles")
       .get()
       .then((querySnapshot) => {
         let items = [];
         querySnapshot.forEach((doc) => {
           items.push(doc.data());
         });
         dispatch(setMorcycles( [...items]) );
       });
   };
 };

 export const getRobots = () => {
  return async (dispatch) => {
    await db
      .collection("store")
      .get()
      .then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch(setRobots( [...items]) );
      });
  };
};


export const getQuadrocopters = () => {
  return async (dispatch) => {
    await db
      .collection("store")
      .get()
      .then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        dispatch(setQuadrocopters( [...items]) );
      });
  };
};
*/
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

import { db } from './firebase';
import { setDoc, Timestamp, doc, updateDoc, getDoc } from 'firebase/firestore';

export const getToDo = async (userId, list, callBack) => {
  try {
    const toDoSnap = await getDoc(doc(db, "to-do", userId));
    if (toDoSnap.exists()) {
      callBack(toDoSnap.data().toDoList);
    } else {
      try {
        await setDoc(doc(db, "to-do", userId), {
          toDoList: list,
          lastUpdateTime: Timestamp.now()
        });
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    }
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}

export const updateToDo = async (userId, list) => {
  try{
    await updateDoc(doc(db, 'to-do', userId), {
      toDoList: list,
      lastUpdateTime: Timestamp.now()
    });
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}

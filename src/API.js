import { auth, db, provider } from './firebase';
import { signInWithRedirect, signInWithPopup  } from "firebase/auth";
import { setDoc, Timestamp, doc, updateDoc, getDoc } from 'firebase/firestore';

// Sign in with Google
// export const googleSignIn = () => {
//   signInWithRedirect(auth, provider);
// }

export const googleSignIn = (setUserId) => {
signInWithPopup(auth, provider)
  .then((result) => {
    setUserId(result.user.uid);
  }).catch((error) => {
    console.log(error)
  });
}

// Handel to-do list data
export const getToDo = async (userId, list, setList, setIsLoading) => {
  try {
    const toDoSnap = await getDoc(doc(db, "to-do", userId));
    if (toDoSnap.exists()) {
      setIsLoading(false);
      setList(toDoSnap.data().toDoList);
    } else {
      setIsLoading(false);
      try {
        await setDoc(doc(db, "to-do", userId), {
          toDoList: list,
          lastUpdateTime: Timestamp.now()
        });
        setList([]);
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    }
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}

export const updateToDo = async (userId, list) => {
  try {
    await updateDoc(doc(db, 'to-do', userId), {
      toDoList: list,
      lastUpdateTime: Timestamp.now()
    });
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}

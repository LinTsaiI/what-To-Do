import { auth, db, provider } from './firebase';
import { signInWithRedirect, signOut  } from "firebase/auth";
import { setDoc, Timestamp, doc, updateDoc, getDoc } from 'firebase/firestore';

// Sign in with Google
export const googleSignIn = () => {
  signInWithRedirect(auth, provider);
}

// Sign out from Google
export const signOutFromGoogle = (setUserId) => {
  signOut(auth).then(() => {
    setUserId(null);
  }).catch((error) => {
    console.log(error);
  });
}

// Handel to-do list data
export const getToDo = async (userId, list, setList) => {
  try {
    const toDoSnap = await getDoc(doc(db, "to-do", userId));
    if (toDoSnap.exists()) {
      setList(toDoSnap.data().toDoList);
    } else {
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
  try{
    await updateDoc(doc(db, 'to-do', userId), {
      toDoList: list,
      lastUpdateTime: Timestamp.now()
    });
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}

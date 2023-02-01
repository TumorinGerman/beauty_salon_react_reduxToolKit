import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore/lite";

const addDocToCollectionUser = async (userId, userInfo) => {
  try {
    await setDoc(doc(db, "users", userId), userInfo);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addDocToCollectionUser;

import { db } from "../firebase_config";
import { collection, addDoc } from "firebase/firestore/lite";

const addDocToCollectionOrder = async (userInfo) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), userInfo);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addDocToCollectionOrder;

import { db } from "../firebase_config";
import { doc, getDoc } from "firebase/firestore/lite";

const getUsersOrders = async (date) => {
  const docRef = doc(db, "users_orders", date);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

export default getUsersOrders;

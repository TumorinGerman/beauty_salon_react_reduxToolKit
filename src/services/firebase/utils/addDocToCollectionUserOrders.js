import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore/lite";

const addDocToCollectionUserOrder = async ({
  orderDate,
  orderTime,
  selectedService,
  selectedOperation,
}) => {
  try {
    await setDoc(doc(db, "users_orders", orderDate), {
      orderTime,
      selectedService,
      selectedOperation,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document: ", e);
  }
};

export default addDocToCollectionUserOrder;

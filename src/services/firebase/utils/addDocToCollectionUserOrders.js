import { db } from "../firebase_config";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore/lite";
import getUsersOrders from "./getUsersOrders";

const addDocToCollectionUserOrder = async ({
  orderDate,
  orderTime,
  selectedService,
  selectedOperation,
}) => {
  const ordersRef = doc(db, "users_orders", orderDate);
  const ordersForThisDay = await getUsersOrders(orderDate);
  if (ordersForThisDay) {
    try {
      await updateDoc(ordersRef, {
        orders: arrayUnion({
          orderTime,
          selectedService,
          selectedOperation,
        }),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Przepraszać. Błąd podczas przesyłania aplikacji. Użyj telefonu.");
    }
  } else {
    const docData = {
      orders: [],
    };
    try {
      await setDoc(ordersRef, docData);
      await updateDoc(ordersRef, {
        orders: arrayUnion({
          orderTime,
          selectedService,
          selectedOperation,
        }),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Przepraszać. Błąd podczas przesyłania aplikacji. Użyj telefonu.");
    }
  }
};

export default addDocToCollectionUserOrder;

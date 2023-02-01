import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase_config";

const getPrice = async () => {
  const priceCol = collection(db, "price");
  const priceSnapshot = await getDocs(priceCol);
  const priceList = priceSnapshot.docs.map((doc) => doc.data());
  return priceList;
};

export default getPrice;

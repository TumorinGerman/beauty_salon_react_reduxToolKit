import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase_config";

const getPromo = async (docId) => {
  const promoCol = collection(db, "promo");
  const promoSnapshot = await getDocs(promoCol);
  const promoList = promoSnapshot.docs.map((doc) => doc.data());
  return promoList;
};

export default getPromo;

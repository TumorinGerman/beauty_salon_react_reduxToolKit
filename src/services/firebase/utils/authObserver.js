import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
    console.log(" User is signed out");
    return null;
  }
});

export default onAuthStateChanged;

import { getAuth, onAuthStateChanged } from "firebase/auth";

const authObserver = () => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(" User is signIn", uid);
    } else {
      console.log(" User is signed out");
    }
  });
};

export default authObserver;

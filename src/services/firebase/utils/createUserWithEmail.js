import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const createUserWithEmail = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
      return null;
    });
};

export default createUserWithEmail;

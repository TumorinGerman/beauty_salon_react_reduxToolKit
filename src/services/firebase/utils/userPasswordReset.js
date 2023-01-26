import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const userResetPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
      // ..
    });
};
export default userResetPassword;

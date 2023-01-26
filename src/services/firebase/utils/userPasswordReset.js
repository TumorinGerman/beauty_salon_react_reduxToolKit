import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const userResetPassword = (email) => {
  try {
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
    return true;
  } catch {
    alert("Something went wrong, please try again");
    return false;
  }
};
export default userResetPassword;

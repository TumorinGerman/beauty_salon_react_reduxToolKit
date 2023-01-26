import { getAuth, sendEmailVerification } from "firebase/auth";

const sendVerificationEmail = () => {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
  });
};

export default sendVerificationEmail;

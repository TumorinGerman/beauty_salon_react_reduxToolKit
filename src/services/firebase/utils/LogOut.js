import { getAuth, signOut } from "firebase/auth";

const LogOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      //User Out
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

export default LogOut;

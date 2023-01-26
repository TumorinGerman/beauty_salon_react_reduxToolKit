import { getAuth } from "firebase/auth";

const getCurrentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const uid = user.uid;
    return uid;
  }
  return null;
};

export default getCurrentUser;

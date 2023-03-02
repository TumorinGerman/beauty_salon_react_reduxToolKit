import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase_config";

const getImgFromStorage = async (imgRef) => {
  const httpsReference = ref(storage, imgRef);
  console.log(httpsReference);

  return await getDownloadURL(httpsReference)
    .then((url) => {
      return url;
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break;
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break;
        default:
          console.log("Loading error");
          break;
      }
    });
};

export default getImgFromStorage;
